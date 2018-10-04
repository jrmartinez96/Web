from django.core.management.base import BaseCommand

from django.contrib.auth.models import User
from homepage.models import Post


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        exit = False
        while(not exit):
            print("           Menu \n -------------------------- \n 1. Crear Usuario \n 2. Listar Usuarios \n 3. Acceder \n 4. Salir \n \n")
            try:
                menu_option = int(input("Ingrese la opcion del menu: "))
            except ValueError:
                print("\nIngrese un numero \n\n")
                menu_option = 0

            if(menu_option == 1):
                crear_usuario()
            elif(menu_option == 2):
                print("Opcion 2")
            elif(menu_option == 3):
                print("Opcion 3")
            elif(menu_option == 4):
                exit = True
            
        
def crear_usuario():
    username = input("Ingrese el usuario: ")
    email = input("Ingrese el correo: ")

    new_user = User(username=username, email=email)
    new_user.save()