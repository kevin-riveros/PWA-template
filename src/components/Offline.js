import React, { useEffect, useState } from "react";
import { useBooleanState, usePrevious } from "webrix/hooks";
import "./Offline.css";

export default function Offline() {
  const [isOnline, setIsOnline] = useState(true);
  const {
    value: online,
    setFalse: setOffline,
    setTrue: setOnline,
  } = useBooleanState(navigator.onLine);
  const previousOnline = usePrevious(online);

  useEffect(() => {
    if (previousOnline !== online) {
      setIsOnline(online);
    }
  }, [online]);

  useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="container__no-internet-view">
        <img src="https://i.ibb.co/Dt9C1g5/plug.png" alt="" />
        <h1>¡Ups! </h1>
        <h1>Parece que perdiste la conexión</h1>
        <h2>Intentá conectarte de nuevo y volvé a ingresar</h2>
        <button type="button" onClick={() => {}}>
          Ir al inicio
        </button>
      </div>
    );
  }
  return null;
}
