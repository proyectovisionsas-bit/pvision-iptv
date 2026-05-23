# PVISION IPTV

Reproductor de listas M3U / M3U8 con login, interfaz futurista optimizada para TV,
y control remoto en página separada. Instalable como app (PWA).

## Características
- **Login con PIN** — acceso seguro a cada equipo
- **Reproductor IPTV** — streams HLS y archivos de audio/video
- **Control remoto separado** — envía listas desde otro dispositivo
- **Interfaz para TV** — grande, clara, fácil de navegar con control remoto
- **Instalable como app** — en Android, Android TV, PC e iPhone
- **Se actualiza solo** — cambios en GitHub se reflejan automáticamente

## Archivos
- `login.html` — pantalla de ingreso con PIN
- `app.html` — reproductor IPTV
- `control.html` — página para enviar listas desde otro dispositivo
- `sw.js` — service worker (necesario para instalación PWA)
- `README.md` — este archivo
- `GUIA-INSTALACION.md` — guía para usuarios

## Primeros pasos
1. Sube todos los archivos a tu repo en GitHub.
2. Ve a Settings → Pages.
3. Elige "main" branch, "/ (root)" folder → Save.
4. Tu app estará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`
5. El primer login: crea un PIN de 4 dígitos.

## Estructura
```
Tu sitio GitHub
├─ login.html      (acceso)
├─ app.html        (reproductor)
├─ control.html    (control remoto)
├─ sw.js           (service worker)
└─ README.md
```

## Notas
- El **control remoto es una página separada** — desde otro dispositivo abres `/control.html` para enviar listas al equipo IPTV.
- La **app IPTV no muestra URLs** — solo nombre del canal y metadatos.
- Optimizado para **TV con control remoto**: botones grandes, navegación simple.
- Los **favoritos y listas se guardan localmente** en el dispositivo.
