# Spring-App
Application using microservices architecture

# Setup du projet 
    installation des Microservice 
# Lien vers
    spring.io

# config-service qui va contenir nos configuration
    Utilisation des dependances suivante
    config server
    Actuator
    Consul Discovery(pour enregistrement des utilisateur)
# customer-service microservice pour les client
    Utilisation des dependances suivante
    Spring web
    Spring data jpa(base de données)
    H2 database
    Lombok(les annotations)
    RestRepositories
    config client
    Actuator
    Consul Discovery(pour enregistrement des utilisateur)
# inventory-service microservice pour les client
    Utilisation des dependances suivante
    Spring web
    Spring data jpa(base de données)
    H2 database
    Lombok(les annotations)
    RestRepositories
    config client
    Actuator
    Consul Discovery(pour enregistrement des utilisateur)
# order-service microservice pour les client
    Utilisation des dependances suivante
    Spring web
    Spring data jpa(base de données)
    H2 database
    Lombok(les annotations)
    RestRepositories
    config client
    Actuator
    Consul Discovery(pour enregistrement des utilisateur)
# Création d'un projet vide nommée("Act4_MASKI")

# Configuration de Consul descovery

<h3>Commande pour lancer Consul</h3>
<strong>> consul agent -server -bootstrap-expect=1 -data-dir=consul-data -ui -bind=192.168.43.32</strong>
<h3>Commande pour lancer Vault</h3>
<strong>> vault server -dev</strong>



# affichage des produit
<img src="captures/capture1.png"></img>

# affichages des clients
<img src="captures/capture2.png"></img>

# affichages des commandes des clients
<img src="captures/capture3.png"></img>


# affichages des details pour chaque commande

<img src="captures/capture4.png"></img>

# page contact

<img src="captures/capture5.png"></img>
# page home
<img src="captures/capture6.png"></img>
 
