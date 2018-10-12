from django.core.management.base import BaseCommand

from chismes_app.models import Chisme


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        new_page()
        print("+------------------------+\n+                        +\n+  AGREGAR NUEVO CHISME  +\n+                        +\n+------------------------+\n\n")
        title = input("Ingrese el titulo del chisme: ")
        description = input("Ingrese la descripcion del chisme: ")

        new_chisme = Chisme(title=title, description=description)
        new_chisme.save()

#-------------
# FUNCIONES
#-------------
def new_page():
    for i in range(0,55):
        print(" ")