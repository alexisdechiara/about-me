<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="language" content="FR">
    <meta name="author" content="Alexis De Chiara">
    <meta name="description" content="CV et portfolio en ligne de Alexis De Chiara">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <!--Bootstrap -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <script src="assets/js/bootstrap.js" type="text/javascript"></script>
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Personnals files -->
    <link rel="stylesheet" href="assets/css/main.css">
    <script src="assets/js/main.js" type="text/javascript"></script>
    <title>Alexis De Chiara</title>
</head>
<body>
<header class="bg-primary">
    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-primary" id="navigation">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggler" aria-controls="toggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-md-center" id="toggler">
                <div class="navbar-nav mb-2 mb-md-0 fw-bold fs-5">
                    <a class="nav-link active mx-2 text-center" aria-current="page" href="#presentation" id="presentation-link">Présentation</a>
                    <a class="nav-link mx-2 text-center" href="#skills" id="skills-link">Compétences</a>
                    <a class="nav-link mx-2 text-center" href="#career" id="career-link">Carrière</a>
                    <a class="nav-link mx-2 text-center" href="#portfolio" id="portfolio-link">Portfolio</a>
                    <a class="nav-link mx-2 text-center" href="#contact" id="contact-link">Contact</a>
                </div>
            </div>
        </div>
    </nav>
</header>
<main>
    <div class="container-fluid bg-primary d-flex flex-column align-items-center" id="presentation">
        <h1 class="text-center col-12 fw-bold mb-5 text-light">Présentation</h1>
        <div class="container row g-5 justify-content-center">
            <div class="col-xs-12 col-md-10 col-lg-6 col-xl-5">
                <div class="card">
                    <img src="https://via.placeholder.com/400.png?text=Place+Holder" class="card-img-top" height="400px" alt="Image de profil">
                    <div class="card-body">
                        <h2 class="card-title fs-5 fw-bold">Alexis De Chiara</h2>
                        <div class="card-text" style="text-align: justify">
                            Je suis un programmeur web Fullstack, spécialisé principalement en UI et UX, je peut cependant réaliser un site web de A à Z.
                            J'ai aussi des compétences en développement d'application Java pour Windows ou Android.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-10 col-lg-5 col-xl-4">
                <div class="row row-cols-1 g-3 justify-content-start mb-3">
                    <div class="col">
                        <div class="card">
                            <h3 class="card-header fs-5">
                                Diplôme actuel
                            </h3>
                            <div class="card-body">
                                DUT Informatique
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1 g-3 justify-content-start mb-3">
                    <div class="col">
                        <div class="card">
                            <h3 class="card-header fs-5">
                                Spécialisation
                            </h3>
                            <div class="card-body">
                                Web - Fullstack
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1 g-3 justify-content-start mb-3">
                    <div class="col">
                        <div class="card">
                            <h3 class="card-header fs-5">
                                Emploi actuel
                            </h3>
                            <div class="card-body">
                                Stagiaire à UBS (Monaco) S.A.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="transform:rotate(180deg);margin-top:-1px;">
        <path fill="#0d6efd" fill-opacity="1"
              d="M0,192L60,208C120,224,240,256,360,229.3C480,203,600,117,720,106.7C840,96,960,160,1080,165.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
    </svg>
    <div class="container-fluid" id="skills">
        <h1 class="text-center fw-bold mb-5">Compétences</h1>
        <div class="container d-flex justify-content-center align-content-center">
            <div class="accordion" id="skills-accordion"  style="width: 750px">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="skills-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skills-collapsOne" aria-expanded="true" aria-controls="skills-collapsOne">
                            Languages de programmation
                        </button>
                    </h2>
                    <div id="skills-collapsOne" class="accordion-collapse collapse show" aria-labelledby="skills-headingOne">
                        <div class="accordion-body">
                            <div class="row g-3 justify-content-center">
                                <img src="assets/img/logo/logo-java-short.svg" alt="Java" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#javaModal" height="64px">
                                <img src="assets/img/logo/logo-c-short.svg" alt="C" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#cModal" height="64px">
                                <img src="assets/img/logo/logo-cSharp-short.svg" alt="C#" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#cSharpModal" height="64px">
                                <img src="assets/img/logo/logo-html-medium.svg" alt="HTML5" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#htmlModal" height="64px">
                                <img src="assets/img/logo/logo-css-medium.svg" alt="CSS3" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#cssModal" height="64px">
                                <img src="assets/img/logo/logo-javascript-short.svg" alt="JavaScript" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#javascriptModal" height="64px">
                                <img src="assets/img/logo/logo-typescript-short.svg" alt="TypeScript" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#typescriptModal" height="64px">
                                <img src="assets/img/logo/logo-php-short.svg" alt="PHP" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#phpModal" height="64px">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="skills-headingTwo">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skills-collapsTwo" aria-expanded="true" aria-controls="skills-collapsTwo">
                            Système de Gestion de Base de données
                        </button>
                    </h2>
                    <div id="skills-collapsTwo" class="accordion-collapse collapse show" aria-labelledby="skills-headingTwo">
                        <div class="accordion-body">
                            <div class="row g-3 justify-content-center">
                                <img src="assets/img/logo/logo-access-short.svg" alt="Access" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#accessModal" height="64px">
                                <img src="assets/img/logo/logo-mySQL-short.svg" alt="MySQL" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#mysqlModal" height="64px">
                                <img src="assets/img/logo/logo-postgreSQL-short.svg" alt="PostgreSQL" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#postgresqlModal" height="64px">
                                <img src="assets/img/logo/logo-oracle-short.svg" alt="Oracle Database" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#oracledatabaseModal" height="64px">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="skills-headingThree">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skills-collapseThree" aria-expanded="true" aria-controls="skills-collapseThree">
                            Frameworks
                        </button>
                    </h2>
                    <div id="skills-collapseThree" class="accordion-collapse collapse show" aria-labelledby="skills-headingThree">
                        <div class="accordion-body">
                            <div class="row g-3 justify-content-center">
                                <img src="assets/img/logo/logo-angular-short.svg" alt="Angular" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#angularModal" height="64px">
                                <img src="assets/img/logo/logo-laravel-short.svg" alt="Laravel" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#laravelModal" height="64px">
                                <img src="assets/img/logo/logo-symfony-short.svg" alt="Symfony" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#symfonyModal" height="64px">
                                <img src="assets/img/logo/logo-spring-short.svg" alt="Spring" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#springModal" height="64px">
                                <img src="assets/img/logo/logo-hibernate-short.svg" alt="Hibernate" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#hibernateModal" height="64px">
                                <img src="assets/img/logo/logo-bootstrap-short.svg" alt="Bootstrap" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#bootstrapModal" height="64px">
                                <img src="assets/img/logo/logo-material-short.svg" alt="Material" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#materialModal" height="64px">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="skills-headingFour">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skills-collapseFour" aria-expanded="true" aria-controls="skills-collapseFour">
                            Outils de gestion
                        </button>
                    </h2>
                    <div id="skills-collapseFour" class="accordion-collapse collapse show" aria-labelledby="skills-headingFour">
                        <div class="accordion-body">
                            <div class="row g-3 justify-content-center">
                                <img src="assets/img/logo/logo-git-short.svg" alt="git" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#gitModal" height="64px">
                                <img src="assets/img/logo/logo-gitKraken-short.svg" alt="gitKraken" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#gitKrakenModal" height="64px">
                                <img src="assets/img/logo/logo-gitHub-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#gitHubModal" height="64px">
                                <img src="assets/img/logo/logo-gitLab-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#gitLabModal" height="64px">
                                <img src="assets/img/logo/logo-confluence-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#confluenceModal" height="64px">
                                <img src="assets/img/logo/logo-jira-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#jiraModal" height="64px">
                                <img src="assets/img/logo/logo-trello-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#trelloModal" height="64px">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="skills-headingFive">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skills-collapseFive" aria-expanded="true" aria-controls="skills-collapseFive">
                            Outils de développement et de conception
                        </button>
                    </h2>
                    <div id="skills-collapseFive" class="accordion-collapse collapse show" aria-labelledby="skills-headingFive">
                        <div class="accordion-body">
                            <div class="row g-3 justify-content-center">
                                <img src="assets/img/logo/logo-figma-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#figmaModal" height="64px">
                                <img src="assets/img/logo/logo-eclipse-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#eclipseModal" height="64px">
                                <img src="assets/img/logo/logo-intelij-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#intelijModal" height="64px">
                                <img src="assets/img/logo/logo-visualStudio-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#visualStudioModal" height="64px">
                                <img src="assets/img/logo/logo-visualStudioCode-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#visualStudioCodeModal" height="64px">
                                <img src="assets/img/logo/logo-atom-short.svg" alt="Figma" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#atomModal" height="64px">
                                <img src="assets/img/logo/logo-bash-short.svg" alt="BASH" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#bashModal" height="64px">
                                <img src="assets/img/logo/logo-npm-short.svg" alt="npm" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#npmModal" height="64px">
                                <img src="assets/img/logo/logo-laragon-short.svg" alt="npm" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#laragonModal" height="64px">
                                <img src="assets/img/logo/logo-maven-short.svg" alt="Maven" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#mavenModal" height="64px">
                                <img src="assets/img/logo/logo-apache-short.svg" alt="Apache" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#apacheModal" height="64px">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="skills-headingSix">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skills-collapseSix" aria-expanded="true" aria-controls="skills-collapseSix">
                            Logiciels de traitement
                        </button>
                    </h2>
                    <div id="skills-collapseSix" class="accordion-collapse collapse show" aria-labelledby="skills-headingSix">
                        <div class="accordion-body">
                            <div class="row g-3 justify-content-center">
                                <img src="assets/img/logo/logo-docs-short.svg" alt="Google Docs" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#docsModal" height="64px">
                                <img src="assets/img/logo/logo-slides-short.svg" alt="Google Slides" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#slidesModal" height="64px">
                                <img src="assets/img/logo/logo-sheets-short.svg" alt="Google Sheets" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#sheetsModal" height="64px">
                                <img src="assets/img/logo/logo-word-short.svg" alt="Word" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#wordModal" height="64px">
                                <img src="assets/img/logo/logo-powerpoint-short.svg" alt="PowerPoint" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#powerpointModal" height="64px">
                                <img src="assets/img/logo/logo-excel-short.svg" alt="Excel" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#excelModal" height="64px">
                                <img src="assets/img/logo/logo-premierPro-short.svg" alt="Premier Pro" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#premierProModal" height="64px">
                                <img src="assets/img/logo/logo-photoshop-short.svg" alt="Photoshop" class="col-auto zoom clickable" data-bs-toggle="modal" data-bs-target="#photoshopModal" height="64px">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#dc3545" fill-opacity="1"
              d="M0,192L60,202.7C120,213,240,235,360,213.3C480,192,600,128,720,117.3C840,107,960,149,1080,138.7C1200,128,1320,64,1380,32L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
    </svg>
    <div class="container-fluid bg-danger" id="career">
        <h1 class="text-center text-light fw-bold mb-5">Carrière</h1>
        <div class="container timeline py-5">
            <div class="timeline-container timeline-left">
                <div class="content rounded">
                    <h3> <span class="badge bg-secondary">2019</span> Baccalauréat Scientifique</h3>
                    <p class="fs-5">Lycée Calmette</p>
                    <p class="text-justify"><strong>Option ISN</strong> avec de la programmation en java et python, mais aussi apprentissage du html5 et css3 à part.</p>
                </div>
            </div>
            <div class="timeline-container timeline-right">
                <div class="content rounded">
                    <h3><span class="badge bg-secondary"> 2021</span> DUT Informatique</h3>
                    <p class="fs-5">IUT Nice Côte d'Azur</p>
                    <p class="text-justify">Formation initiale menant sur l'apprentissage de l'ensemble des types de langage de programmation existants puis <strong> stage en entreprise de 4 mois à UBS Monaco en tant que développeur web</strong>.</p>
                </div>
            </div>
        </div>
    </div>
    <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
        <path
                d="M 0,400 C 0,400 0,200 0,200 C 104.21052631578951,178.57416267942585 208.42105263157902,157.14832535885168 306,169 C 403.578947368421,180.85167464114832 494.52631578947353,225.98086124401914 585,223 C 675.4736842105265,220.01913875598086 765.4736842105265,168.92822966507177 859,168 C 952.5263157894735,167.07177033492823 1049.578947368421,216.3062200956938 1147,230 C 1244.421052631579,243.6937799043062 1342.2105263157896,221.8468899521531 1440,200 C 1440,200 1440,400 1440,400 Z"
                stroke="none" stroke-width="0" fill="#dc3545ff" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path>
    </svg>
    <div class="container-fluid" id="portfolio">
        <h1 class="text-center fw-bold mb-5">Portfolio</h1>
        <div class="container">
            <div class="row justify-content-center align-items-center g-5">
                <div class="col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center"><img class="img-fluid rounded ratio ratio-16x9 portfolio-img" src="https://via.placeholder.com/500x281.png?text=about+me" data-bs-toggle="modal" data-bs-target="#aboutMeModal" alt="About-me"></div>
                <div class="col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center"><img class="img-fluid rounded ratio ratio-16x9 portfolio-img" src="https://via.placeholder.com/500x281.png?text=Roll20Alternative" data-bs-toggle="modal" data-bs-target="#roll20AlternativeModal" alt="Roll20Alternative"></div>
                <div class="cocol-xs-12 col-sm-6 col-md-4 d-flex justify-content-centerr"><img class="img-fluid rounded ratio ratio-16x9 portfolio-img" src="https://via.placeholder.com/500x281.png?text=Utility-tools" data-bs-toggle="modal" data-bs-target="#utilitytoolsModal" alt="Utility-tools"></div>
                <div class="cocol-xs-12 col-sm-6 col-md-4 d-flex justify-content-centerr"><img class="img-fluid rounded ratio ratio-16x9 portfolio-img" src="https://via.placeholder.com/500x281.png?text=WIP" data-bs-toggle="modal" data-bs-target="#wipModal" alt="WIP" ></div>
                <div class="cocol-xs-12 col-sm-6 col-md-4 d-flex justify-content-centerr"><img class="img-fluid rounded ratio ratio-16x9 portfolio-img" src="https://via.placeholder.com/500x281.png?text=WIP" data-bs-toggle="modal" data-bs-target="#wipModal" alt="WIP"></div>
                <div class="cocol-xs-12 col-sm-6 col-md-4 d-flex justify-content-centerr"><img class="img-fluid rounded ratio ratio-16x9 portfolio-img" src="https://via.placeholder.com/500x281.png?text=WIP" data-bs-toggle="modal" data-bs-target="#wipModal" alt="WIP"></div>
            </div>
        </div>
    </div>
    <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
        <path d="M 0,400 C 0,400 0,200 0,200 C 93.64285714285714,175.03571428571428 187.28571428571428,150.07142857142858 292,174 C 396.7142857142857,197.92857142857142 512.5,270.75 655,263 C 797.5,255.25 966.7142857142858,166.92857142857142 1102,143 C 1237.2857142857142,119.07142857142858 1338.642857142857,159.53571428571428 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#212529ff" class="transition-all duration-300 ease-in-out delay-150">
        </path>
    </svg>
    <div class="container-fluid bg-dark text-light row justify-content-center" id="contact" style="margin:0">
        <h1 class="col-12 text-center fw-bold mb-5">Contact</h1>
        <form class="row" method="POST" style="width: 750px;">
            <div class="col-12">
                <div class="mb-3">
                    <label for="email-name" class="form-label">Nom<sup>*</sup></label>
                    <input type="text" class="form-control" id="email-name">
                </div>
                <div class="mb-3">
                    <label for="email-adress" class="form-label">Adresse de courriel<sup>*</sup></label>
                    <input type="email" class="form-control" id="email-adress" required>
                    <div id="invalid-email" class="invalid-feedback">Merci de mettre une adresse valide</div>
                </div>
                <div class="mb-3">
                    <label for="email-subject" class="form-label">Sujet</label>
                    <input type="text" class="form-control" id="email-subject">
                </div>
            </div>
            <div class="mb-3">
                <label for="email-message" class="form-label">Message</label>
                <textarea class="form-control" id="email-message" rows="5"></textarea>
            </div>
            <div class=" d-grid mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
        <?php include 'assets/php/send_email.php';?>
        <div class="row justify-content-center g-5">
            <div class="col-auto">
                <a href="https://github.com/alexisdechiara" class="d-flex flex-column text-decoration-none text-light text-wrap">
                    <i class="fab fa-github fs-1 align-self-center"></i>
                    <span class="fs-4 align-self-center lh-lg">GitHub</span>
                </a>
            </div>
            <div class="col-auto">
                <a href="https://gitlab.com/AlexisDeChiara" class="d-flex flex-column text-decoration-none text-light text-wrap">
                    <i class="fab fa-gitlab fs-1 align-self-center"></i>
                    <span class="fs-4 align-self-center lh-lg">GitLab</span>
                </a>
            </div>
            <div class="col-auto">
                <a href="https://fr.linkedin.com/in/AlexisDeChiara" class="d-flex flex-column text-decoration-none text-light text-wrap">
                    <i class="fab fa-linkedin fs-1 align-self-center"></i>
                    <span class="fs-4 align-self-center lh-lg">LinkdedIn</span>
                </a>
            </div>
        </div>
    </div>
</main>
<footer>
    <div class="container-fluid bg-dark text-light text-center p-3">
        <div class="row">
            <div class="col-xs-12 col-md-3 text-md-start">
                Site sous license MIT
            </div>
            <div class="col-xs-12 col-md-6 text-md-center">
                Réalisé par Alexis De Chiara
            </div>
            <div class="col-xs-12 col-md-3 text-md-end">
                version 1.0
            </div>
        </div>
    </div>
</footer>
<?php include "assets/html/modals.html" ?>
</body>
</html>
