import uuid from 'react-uuid'

export function generarUUID(){
    let localuuid = window.sessionStorage.getItem('uuid');

    if(!localuuid || !window.name) {
        localuuid = uuid();
        window.sessionStorage.setItem('uuid', localuuid);
    }

    window.name = localuuid;
    return localuuid;
}

export function obtenerUUID(){
    let localuuid = window.sessionStorage.getItem('uuid');
    return localuuid;
}