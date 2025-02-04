const d=document,
    n=navigator,
    ua=navigator.userAgent;

export default function userDeviceInfo(id){
    const $id=d.getElementById(id),
        isMobile={
            android:()=>ua.match(/android/i),
            ios:()=>ua.match(/iphone|ipad|ipod/i),
            windows:()=>ua.match(/windows phone/i),
            any:function(){
                return this.android()||this.ios()||this.windows();
            },
        },
        isDesktop={
            linux:()=>ua.match(/linux/i),
            mac:()=>ua.match(/mac os/i),
            windows:()=>ua.match(/windows nt/i),
            any:function(){
                return this.linux()||this.mac()||this.windows();
            },
        },
        isBrowser={
            chrome:()=>ua.match(/chrome/i),
            safari:()=>ua.match(/safari/i),
            firefox:()=>ua.match(/firefox/i),
            opera:()=>ua.match(/opera|opera mini/i),
            ie:()=>ua.match(/msie|iemobile/i),
            edge:()=>ua.match(/edg/i),
            
            any:function(){
                return(
                 this.ie()||
                 this.safari()||
                 this.edge()||
                 this.chrome()||
                 this.firefox()||
                 this.opera()
                );
            },


        };

$id.innerHTML=`
<ul>
<li>User Agent: <b>${ua}</b></li>
<li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
<li>Navegador: <b>${isBrowser.any()}</b></li>
</ul>`;

if (isBrowser.chrome()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en Chrome </mark></p>    `
}
if (isBrowser.firefox()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en Firefox </mark></p>    `
}
if (isBrowser.edge()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en Edge </mark></p>    `
}
if (isDesktop.linux()){
    $id.innerHTML+=`<p><mark>Descarga Linux </mark></p>    `
}
if (isDesktop.mac()){
    $id.innerHTML+=`<p><mark>Descarga Mac </mark></p>    `
}
if(isDesktop.windows()){
    $id.innerHTML+=`<p><mark>Descarga Windows </mark></p>    `
}
/*Redirecciones*/
if(isMobile.android()){
    window.location.href="https://youtube.com"
}
}