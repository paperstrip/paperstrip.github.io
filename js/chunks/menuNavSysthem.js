"use strict";(self.webpackChunkwibicom_stater_pack=self.webpackChunkwibicom_stater_pack||[]).push([[830],{3693:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var a=t(5880);const i=window.menuNav;window.menuNav=new function(){this.init=function(){},this.menuResizeHandler=function(){console.log("ici"),$(".main-header .btn-menu").removeClass("open"),a.os.set($(".main-nav-center"),{clearProps:"all"}),a.os.set($(".menu-item a"),{clearProps:"all"})},this.timeline=a.os.timeline({paused:!0}),this.timeline.to("header  nav",{yPercent:100,duration:.4,ease:"power2.inOut"},"triggerMenu"),this.timeline.to("header [data-append-title]",{yPercent:-100,autoAlpha:0,duration:.4,stagger:.01,ease:"power2.inOut"},"triggerMenu"),this.timeline.to("header  .btn-menu",{autoAlpha:.2,duration:.4,ease:"power2.inOut"},"triggerMenu"),this.timeline.to("header .language-switcher li",{yPercent:-100,duration:.4,stagger:.1,ease:"power2.inOut"},"triggerMenu"),this.show=function(){this.timeline.paused(!1),this.timeline.reversed(!1),$(".main-header .btn-menu").addClass("open")},this.hide=function(){var e=this;return new Promise((function(n){1==$(".main-header .btn-menu").hasClass("open")?(e.timeline.paused(!1),e.timeline.reversed(!0),e.timeline.eventCallback("onReverseComplete",(function(){n()})),$(".main-header,.btn-menu").removeClass("open")):n(!0)}))},this.end=function(){this.timeline.seek(1),this.timeline.paused(!0),$(".main-header").addClass("open"),$(".btn-menu").addClass("open")},this.reset=function(){$(".main-header,.btn-menu").removeClass("open"),a.os.set(".nav-wrapper",{backgroundColor:"rgba(0,0,0,0)"}),a.os.to(".nav-footer",{autoAlpha:0}),a.os.set("header .menu-item a,header .social-list a .wrapper",{yPercent:110}),a.os.set(".main-nav-wrapper",{xPercent:-100})},this.updateCurrentLink=function(){$("header nav a").removeClass("current"),$("header nav a").removeClass("current"),$("header nav a").each((function(e){$(this).prop("href")==document.location.href&&$(this).addClass("current")}))},this.initView=function(){}}}}]);