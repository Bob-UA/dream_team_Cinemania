(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function h(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=h(t);fetch(t.href,o)}})();const b=document.querySelectorAll(".nav_list"),E=document.querySelectorAll(".mobile-nav-list"),m=window.location.href;b.forEach(e=>{e.href===m?e.classList.add("active"):e.classList.remove("active")});E.forEach(e=>{e.href===m?e.classList.add("active"):e.classList.remove("active")});const f=document.getElementById("menu"),s=document.getElementById("modal"),n=document.getElementById("backdrop");f.addEventListener("click",function(){s.classList.add("open"),n.style.display="block"});n.addEventListener("click",function(e){e.target===n&&(s.classList.remove("open"),n.style.display="none")});document.addEventListener("click",function(e){!s.contains(e.target)&&e.target!==f&&(s.classList.remove("open"),n.style.display="none")});const i=document.querySelector("body"),d=document.querySelector(".toggle");document.querySelector(".logo_text");const k=localStorage.getItem("theme");k==="light"?y():p();d.addEventListener("click",()=>{i.classList.contains("white")?(p(),localStorage.setItem("theme","dark")):(y(),localStorage.setItem("theme","light"))});function y(){i.classList.add("white"),d.classList.add("active"),document.documentElement.style.setProperty("--primary-background-color","#111111"),document.documentElement.style.setProperty("--primary-text-color","#282828"),g("light")}function p(){i.classList.remove("white"),d.classList.remove("active"),document.documentElement.style.setProperty("--secondary-background-color","#ffffff"),document.documentElement.style.setProperty("--primary-text-color","#ffffff"),g("dark")}function g(e){const c=document.getElementById("backdrop");e==="light"?c.style.backgroundColor="rgba(255, 255, 255, 0.2)":c.style.backgroundColor="rgba(0, 0, 0, 0.2)"}const S=document.querySelector(".footer-btn"),r=document.querySelector(".backdrop-team-modal"),w=document.querySelector(".close-btn");function q(){r.classList.add("show"),document.addEventListener("keydown",L),r.addEventListener("click",v)}function a(){r.classList.remove("show"),document.removeEventListener("keydown",L),r.removeEventListener("click",v)}function L(e){e.key==="Escape"&&a()}function v(e){e.target===r&&a()}S.addEventListener("click",q);w.addEventListener("click",a);
