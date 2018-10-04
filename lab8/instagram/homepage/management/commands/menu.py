from django.core.management.base import BaseCommand

from django.contrib.auth.models import User
from homepage.models import Post
from homepage.models import PostUserLike


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        new_page()
        exit = False
        while(not exit):
            print("\n \n           Menu \n -------------------------- \n 1. Crear Usuario \n 2. Listar Usuarios \n 3. Acceder \n 4. Salir \n \n")
            try:
                menu_option = int(input("Ingrese la opcion del menu: "))
            except ValueError:
                new_page()
                print("\nIngrese un numero \n\n")
                menu_option = 0

            if(menu_option == 1):
                crear_usuario()

            elif(menu_option == 2):
                listar_usuarios()

            elif(menu_option == 3):
                acceder_usuario()

            elif(menu_option == 4):
                exit = True
            


#-------------
# FUNCIONES
#-------------
def new_page():
    for i in range(0,55):
        print(" ")

def crear_usuario():
    new_page()
    first_name = input("\nIngrese primer nombre: ")
    last_name = input("Ingrese apellido: ")
    username = input("Ingrese username: ")
    email = input("Ingrese email: ")

    new_user = User(username=username, email=email, first_name=first_name, last_name= last_name)
    new_user.save()
    new_page()
    print("Usuario guardado!")

def listar_usuarios():
    new_page()
    users = User.objects.all()

    for user in users:
        pk_number = str(user.pk)
        username = user.username
        user_email = user.email
        print("pk= " + pk_number + ": " + username + " - " + user_email)
    
    print("\n \n")

def acceder_usuario():
    new_page()
    username = input("\nIngrese username: ")
    email = input("Ingrese email: ")

    signed_in = False
    try:
        user = User.objects.get(username=username, email=email)
        new_page()
        print("\n\n Bienvenido " + user.first_name + "!")
        signed_in = True
    except User.DoesNotExist:
        print("DOES NOT EXIST!")
    
    while(signed_in):
        print("\n \n         MENU DE " + user.first_name.upper() + "\n -------------------------- \n 3.1. Crear Post \n 3.2. Like de Post \n 3.3. Delete Post \n 3.4. Menu principal \n \n")
        try:
            menu_option = int(input("Ingrese la opcion del menu: "))
        except ValueError:
            print("\nIngrese un numero \n\n")
            menu_option = 0

        if(menu_option == 1):
            crear_post(user)

        elif(menu_option == 2):
            like_post(user)

        elif(menu_option == 3):
            delete_post(user)

        elif(menu_option == 4):
            signed_in = False
            new_page()

def crear_post(user):
    new_page()
    print("        3.1 Crear Post \n -------------------------- \n")

    title = input("Ingrese titulo: ")
    description = input("Ingrese descripcion: ")

    new_post = Post(title=title, description=description, created_by=user)
    new_post.save()

    new_page()
    print("Post creado!")

def like_post(user):
    new_page()
    print("        3.2 Like de Post \n -------------------------- \n")

    all_posts = Post.objects.all()

    for post in all_posts:
        pk_number = str(post.pk)
        title = post.title
        description = post.description
        likes = str(len(PostUserLike.objects.filter(post=post)))

        print("pk=" + pk_number + ": " + title + " (" + likes + ")\n" + description + "\n")
    
    try:
        post_option = int(input("¿A que post quieres darle like? (ingresa numero de pk): ")) 
    except ValueError:
        new_page()
        print("Ingresa un numero!")
        post_option = 0
    
    if(post_option != 0):
        try:
            post = Post.objects.get(pk=post_option)
            
            new_like = PostUserLike(post=post, user=user)
            new_like.save()

            new_page()
            print("Post likeado!")
        except Post.DoesNotExist:
            new_page()
            print("Numero pk invalido!")

def delete_post(user):
    new_page()
    print("        3.3 Delete Post \n -------------------------- \n")

    user_posts = Post.objects.filter(created_by=user)

    for post in user_posts:
        pk_number = str(post.pk)
        title = post.title
        description = post.description
        likes = str(len(PostUserLike.objects.filter(post=post)))

        print("pk=" + pk_number + ": " + title + " (" + likes + ")\n" + description + "\n")
    
    try:
        post_option = int(input("¿Que post quieres eliminar? (ingresa numero de pk): ")) 
    except ValueError:
        new_page()
        print("Ingresa un numero!")
        post_option = 0
    
    if(post_option != 0):
        try:
            post = Post.objects.get(pk=post_option, created_by=user)
            
            post.delete()

            new_page()
            print("Post eliminado!")
        except Post.DoesNotExist:
            new_page()
            print("Numero pk invalido!")