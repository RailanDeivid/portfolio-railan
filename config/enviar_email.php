<?php

    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $celular = addcslashes($_POST['celular']);
    $mensagem = addcslashes($_POST['mensagem']);

    $para = "contato.railandeivid@gmail.com";
    $assunto = "Contato site pessoal";
    $corpo = "Nome: ".$nome."\n"."email: ".$email."\n"."celular: ".$celular."\n"."mensagem: ".$mensagem;

    $cabecalho = "From: contato.railandeivid@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabecalho)){
        echo("E-mail enviado com sucesso!")
    }else{
        echo("Erro ao enviar o email!")
    }

?>