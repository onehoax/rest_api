# One of the way to connect to postgres is through peer authentication (onyl works for local connections)
# Initially, postgres creates a "postgres" username on your system so you can login to postgres with
# "sudo -i -u postgres"
# This connects you to user "postgres" using db "postgres"
# Once you're in as "postgres", create a password for this user so you can connect with the normal "psql" command
# Type "\password" and enter the password you want for user "postgres"
# Now you can connect as you normally would with 
# psql -h localhost -p 5432 -U postgres -d postgres (postgres won't allow you to login this way if you haven't set a password)
# This means connect to postgres on localhost, using port 5432, as user "postgres", to db "postgres"  
# Next, create a custom user and db for your project:
#   createuser -d <user name> ("-d" to allow user to create DBs)
#   createdb   <db name>
# The user and db name are usually the same for a project
# Set a password for the new user:
#   Login as "postgres"
#   \password <username>
# Now you can login to postgres using your custom user and db

# E.g.: if you created a user and db named "restapi":
# Connect to postgres on localhost, using port 5432, as user "restapi", to db "restapi"  
psql -h localhost -p 5432 -U restapi -d restapi

# Using URl
# format -> postgresql://USER:PASSWORD@HOST:PORT/DATABASE
psql postgresql://restapi:restapi@localhost:5432/restapi
