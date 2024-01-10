to start MongoDB (automatically restart):
`sudo docker run -dp 27017:27017 -v local-mongo:/data/db --name local-mongo --restart=always mongo`

To access into running local-mongo container:
`sudo docker exec -it local-mongo sh`

Then type `mongo` and you’re good to go!

