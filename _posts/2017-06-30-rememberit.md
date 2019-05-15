---
layout: base

title: RememberIt
summary: Un moyen simple de créer des albums photos collaboratifs de vos souvenirs.
coverImage: rememberit.jpg
projectImage: rememberit_bck.png

dataCover: rememberit-data-cover.jpg

---
<div class="barba-container portfolio-container" data-namespace="post">



<div class="portfolio-container section slide-section" id="portfolio-home" data-color-pallette='[ "#FFAFB5","#FF9E84", "#FFC17A", "#80C4FF"]' data-blob-x="0" data-blob-y="100">
  <div  class="effect-background"  style="background-image:url('{{ site.baseurl }}/src/img/1500/{{page.dataCover}}')"></div>
  <div class="home-container__content container__cover">
      <div class="holder vertical-slider case-list col-sm-12" data-0="transform:scale(2);" data-100p="transform:scale(1);" data-200p="transform:scale(.2);">
        <div class="col-lg-6 col-md-8 col-sm-12 case-list__item" data-cover="{{page.dataCover}}">
          <div class="case-list__item-detail">
            <h2 class="letter-animation transition-left">{{page.title}}</h2>
            <p class="home-container__content-text toStagger" data-0="transform:translate3d(0px,0px, 0px);"  data-100p="transform:translate3d(0px, 0px, 0px);opacity:1;" data-200p="transform:translate3d(0px, -310px, 0px);">{{page.summary}}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
