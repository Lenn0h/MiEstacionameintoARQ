$(document).ready(function()
        {
            $("#error").hide();
            $("#formulario").submit(function()
            {
                var mensaje=""; 

                if($("#nombre").val().trim().length==0)
                { 
                    mensaje="Ingresa un nombre valido, por favor";
                }

                if($("#email").val().trim().length==0)
                {
                    mensaje="Ingresa un correo electronico valido, por favor";
                }
                if($("#ciudad").val().trim().length==0)
                { 
                    mensaje="El campo direccion está vacío";
                }
                if($("#banco").val().trim().length==0)
                { 
                    mensaje="El campo banco está vacío";
                }
                if($("#tarjeta").val().trim().length<4)
                {
                    mensaje="Ingresa un numero de Tarjeta de credito Valido";
                }
                if($("#vehiculos").val().trim().length<0)
                {
                    mensaje="Ingresa una cantidad de vehiculos a utilizar valida";
                }
                if(mensaje !="")
                {
                    $("#error").html(mensaje); 
                    $("#error").show(); 
                    event.preventDefault(); 
                }

            });
        });