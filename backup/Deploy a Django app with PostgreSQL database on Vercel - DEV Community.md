I was facing the question: How can I deploy my Django project on Vercel?

**My requirements:**

*   Ubuntu 22.04.3 (Linux)
*   Django project with 3 apps
*   change for the deployment on Vercel the SQLite database to PostgreSQL
*   my static files are in one app (ui) and not in the root directory

```
# project tree (short version):

.
├── accounts
├── build_files.sh
├── db.sqlite3
├── project
│   ├── asgi.py
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
├── README.md
├── requirements.txt
├── second_app
├── ui
│   ├── static
│   │   └── css
│   │       └── styles.css
└── vercel.json 
```

Enter fullscreen mode Exit fullscreen mode

I had already an account on [Vercel](https://vercel.com/) and the [vercel-cli](https://vercel.com/docs/cli) installed.

**step 1**  
create in root directory of your project the file: `build_files.sh` and add these lines of code  

```
# build_files.sh 
pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput 
```

Enter fullscreen mode Exit fullscreen mode

**step 2**  
create in root a `versel.json` file, which is the configuration for the versel deployment:  

```
# versel.json 
{
  "version": 2,
  "builds": [
    {
      "src": "<projectname>/wsgi.py",
      "use": "@vercel/python",
      "config": { "maxLambdaSize": "15mb", "runtime": "python3.9" }
    },
    {
      "src": "build_files.sh",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "ui/staticfiles"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "dest": "/static/$1"
    },
    {
      "src": "/(.*)",
      "dest": "<projectname>/wsgi.py"
    }
  ],
  "outputDirectory": "ui/staticfiles"
} 
```

Enter fullscreen mode Exit fullscreen mode

_make sure to update the "projectname" _  
_`"src": "<projectname>/wsgi.py",` points to the wsgi.py file of your project_  
_`"outputDirectory": "ui/staticfiles"` tells vercel where to look because I have the static and staticfiles directories in the app called ui instead of root directory_

**step 3**  
tell where the static and staticfiles directories are located:  

```
# settings.py 
STATICFILES_DIRS = [os.path.join(BASE_DIR, "ui/static")]
STATIC_URL = "static/"
STATIC_ROOT = os.path.join(BASE_DIR, "ui/staticfiles") 
```

Enter fullscreen mode Exit fullscreen mode

* * *

**NOTE:** If in your project the static directory is in root directory:

```
# versel.json 
{
  "version": 2,
  "builds": [
    {
      "src": "<projectname>/wsgi.py",
      "use": "@vercel/python",
      "config": { "maxLambdaSize": "15mb", "runtime": "python3.9" }
    },
    {
      "src": "build_files.sh",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "staticfiles"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "dest": "/static/$1"
    },
    {
      "src": "/(.*)",
      "dest": "<projectname>/wsgi.py"
    }
  ]
} 
```

Enter fullscreen mode Exit fullscreen mode

```
# settings.py 
STATICFILES_DIRS = [os.path.join(BASE_DIR, "static")]
STATIC_URL = "static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles") 
```

Enter fullscreen mode Exit fullscreen mode

* * *

**step 4**  
Integrate the PostgreSQL database into the Django project:  

```
# settings.py 
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '<mydb>',
        'USER': '<myuser>',
        'PASSWORD': '<mypass>',
        'HOST': 'localhost',
        'PORT': '5432',
    }
} 
```

Enter fullscreen mode Exit fullscreen mode

* * *

_to create a PostgreSQL database look at the end of this article_

* * *

**step 5**  
update the allowed hosts to give vercel access and being a valid host name:  

```
# settings.py 
ALLOWED_HOSTS = ["127.0.0.1", ".vercel.app", ".now.sh"] 
```

Enter fullscreen mode Exit fullscreen mode

**step 6**  
create the vercel variable `app` in your Django project  

```
# wsgi.py 
application = get_wsgi_application()
# add this vercel variable app = application 
```

Enter fullscreen mode Exit fullscreen mode

**step 7**  
add the static folder to the urls of your project  

```
# your_project/urls.py 
urlpatterns = [
    path("admin/", admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) 
```

Enter fullscreen mode Exit fullscreen mode

**step 8**  
open terminal:  

```
vercel 
```

Enter fullscreen mode Exit fullscreen mode

The vercel cli will ask you:  

```
 Set up and deploy “~/<path_of_your_project>”? [Y/n] y
? Which scope do you want to deploy to? <your_github_name>
? Link to existing project? [y/N] n
? What’s your project’s name? <name_of_project>
? In which directory is your code located? ./
🔗  Linked to <your_github_name>/<name_of_project> (created .vercel and added it to .gitignore)
🔍  Inspect: https://vercel.com/<your_github_name>/<name_of_project>/<vercel_specifics> [5s]
 To deploy to production (<name_of_project>.vercel.app), run `vercel --prod`
❗️  Due to `builds` existing in your configuration file, the Build and Development Settings defined in your Project Settings will not apply. Learn More: https://vercel.link/unused-build-settings 
```

Enter fullscreen mode Exit fullscreen mode

to run the deployed Django app on vercel, run:  

```
vercel --prod 
```

Enter fullscreen mode Exit fullscreen mode

* * *

We need to install several libraries and dependancies:

A) install PostgreSQL:  

```
sudo apt-get install postgresql postgresql-contrib 
```

Enter fullscreen mode Exit fullscreen mode

B) install dependencies necessary for Linux:  

```
sudo apt-get install libpq-dev python3-dev 
```

Enter fullscreen mode Exit fullscreen mode

C) install the PostgreSQL database adapter to communicate to the database:  

```
# install inside the virtual environment of your project:
pip install psycopg2
pip freeze > requirements.txt 
```

Enter fullscreen mode Exit fullscreen mode

_use the `pip freeze > requirements.txt` to save the new installed package inside the requirements.txt file_

D) Create the database and a user:  
We use the PostgreSQL database adapter to create a database and a user:  

```
sudo -u postgres psql 
```

Enter fullscreen mode Exit fullscreen mode

first we create the database named: "mydb"  

```
CREATE DATABASE <mydb>; 
```

Enter fullscreen mode Exit fullscreen mode

_end the command with a semicolon!_

create a user "myuser" with password "mypass":  

```
CREATE USER <myuser> WITH ENCRYPTED PASSWORD '<mypass>'; 
```

Enter fullscreen mode Exit fullscreen mode

optimize PostgreSQL's settings:  

```
 ALTER ROLE <myuser> SET client_encoding TO 'utf8';
 ALTER ROLE <myuser> SET default_transaction_isolation TO 'read committed';
 ALTER ROLE <myuser> SET timezone TO 'UTC'; 
```

Enter fullscreen mode Exit fullscreen mode

these parameter are recommended by [Django docs](https://docs.djangoproject.com/en/4.2/ref/databases/#optimizing-postgresql-s-configuration)

grant permission to the user:  

```
GRANT ALL PRIVILEGES ON DATABASE <mydb> TO <myuser>; 
```

Enter fullscreen mode Exit fullscreen mode

_addapt the name of the database and the user name_

quit the SQL prompt  

```
\q 
```

Enter fullscreen mode Exit fullscreen mode

E) Integrate the PostgreSQL database into the Django project:  

```
# settings.py 
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '<mydb>',
        'USER': '<myuser>',
        'PASSWORD': '<mypass>',
        'HOST': 'localhost',
        'PORT': '',
    }
} 
```

Enter fullscreen mode Exit fullscreen mode

* * *

For production or hosting on Vercel the better version will be to store sensitive information in the `.env` file in root of your project.

To be able to use a `.env` file in your project we need to install:  

```
pip install python-dotenv
pip freeze > requirements.txt 
```

Enter fullscreen mode Exit fullscreen mode

_use the `pip freeze > requirements.txt` to save the new installed package inside the requirements.txt file_  

```
# settings.py 
from dotenv import load_dotenv
load_dotenv()

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": os.environ.get("DB_NAME"),
        "USER": os.environ.get("DB_USER"),
        "PASSWORD": os.environ.get("DB_PASSWORD"),
        "HOST": os.environ.get("DB_HOST"),
        "PORT": os.environ.get("DB_PORT"),
    }
} 
```

Enter fullscreen mode Exit fullscreen mode

add a new file `.env` in root of your project:  

```
# .env 
DB_NAME= "<mydb>"
DB_USER= "<myuser>"
DB_PASSWORD= "<mypass>"
DB_HOST= "localhost"
DB_PORT= "5432" 
```

Enter fullscreen mode Exit fullscreen mode

finish the creation of the PostgreSQL database with  

```
python manage.py makemigrations
python manage.py migrate 
```

Enter fullscreen mode Exit fullscreen mode

Hope this post helps!