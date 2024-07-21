INSTALLED_APPS = [
    # ...
    'authentication',
]

# Add this at the bottom of the file
LOGIN_REDIRECT_URL = 'home'
LOGOUT_REDIRECT_URL = 'login'
AUTH_USER_MODEL = 'authentication.CustomUser'