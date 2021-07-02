<?php
            if(isset($_POST['message'])){
                $entete  = 'MIME-Version: 1.0' . "\r\n";
                $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
                $entete .= 'From: ' . $_POST['email-adress'] . "\r\n";
        
                $message = '<h1>Message envoyé depuis la page Contact de monsite.fr</h1>
                <p><b>Nom : </b>' . $_POST['email-name'] . '<br>
                <b>Email : </b>' . $_POST['email-adress'] . '<br>
                <b>Message : </b>' . $_POST['email-message'] . '</p>';
        
                $retour = mail('alexis.de-chiara@hotmail.fr', 'Envoi depuis page Contact', $message, $entete);
                if($retour) {
                    echo '<p>Votre message a bien été envoyé.</p>';
                }
            }
?>