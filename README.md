Olá Visitante, 
Esté é um projeto no qual me desafiei por fazer uma iterface web antes de começar o curso Ignite da Rocketseat.
Visando testar meus conhecimentos adiquiridos na trilha Discovery e afins.

Então cada versão deste projeto visa mostrar os novos conhecimentos adquiridos ao decorrer do curso
e como isso impactou no desenvolvimento do mesmo.


Segue abaixo uma lista de futuras correções

-importar CSS como "styles.module.css" afim de deixar 'scopado' o arquivo css e não ter interferencias de outros styles.

    exemplo: 
        import styles from './Styles.module.css'

        <h1 className={styles.h1}>Teste 1</h1>

-inserir variaveis de cores CSS

    exemplo:
        :root {
            --white: #ffffff;
            --gray-100: #e1e1e6;
            --gray-300: #c4c4cc;
        }

        body{
            background-color: var(--gray-900);
        }

-estilizar um elemento que contenha o mesmo anteriormente

    .post + .post{

    }

-"\2022" ponto do aplaudir