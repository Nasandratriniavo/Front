"use client";
import styles from "@/styles/auth/login.module.css";
import Link from "next/link";
import imgconnecter from "@/assets/images/cool.png";
import googleIcon from "./../../../assets/images/300221.png";
import React, { useState } from "react";
import Image from "next/image";

export default function Connecter({ setLogin }) {
  const [userName, setUserName] = useState();
  const [userPwd, setUserPwd] = useState();
  const [erreur, setErreur] = useState("");
  const [succes, setSucces] = useState("");

  function error() {
    setTimeout(() => {
      setErreur("");
    }, 3000);
  }

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePwd = (e) => setUserPwd(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !userPwd) {
      setErreur("Veuiller completer les champs");
      error();
    } else {
      alert("O.K");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.subcontent}>
          <div className={styles.left}>
            <h1>
              <i className="mdi mdi-hexagon-multiple" />
              Strix
            </h1>
            <p>
              Inscrivez-vous aujourd&apos;hui et soyez partie prenante de la
              marche vers un avenir plus propre et plus intelligent! Ensemble,
              nous puvons faire la difference.
            </p>
            <>
              <p
                style={{
                  position: "absolute",
                  bottom: "9rem",
                  right: "5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ fontSize: "2rem", fontWeight: 600 }}>
                  Strix ipsum
                </span>
                <span>
                  Venez nous rejoindre . . . 👍 <br /> pour une avenir meilleur
                  !
                </span>
              </p>
              <Image
                src={imgconnecter}
                style={{ position: "absolute", bottom: 0, left: 0 }}
                width={500}
                alt=""
              />
            </>
          </div>
          <div className={styles.form}>
            <h1>
              {/* <i className="mdi mdi-hexagon-multiple" /> */}
              👋 Hello
            </h1>
            <Link href={"https://www.youtube.com/"} className={styles.or}>
              <Image src={googleIcon} alt=""></Image>
              <p>Se connecter avec google</p>
            </Link>
            <div className={styles.separation}>
              <hr />
              <span>ou</span>
              <hr />
            </div>

            <div className={styles.formulaire}>
              <form action="" className={styles.forms} onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Utilisateur"
                  onChange={handleUserName}
                />
                <input
                  type="text"
                  placeholder="Mot de passe"
                  onChange={handlePwd}
                />
                <button type="submit">Se connecter</button>
              </form>
              <div className={styles.subtitle}>
                <Link href={"/signUp"}>S'inscrire</Link>
                <span>Mot de passe oublier</span>
              </div>
              <div className={styles.messages}>
                {erreur && <div className={styles.erreur}>{erreur}</div>}
                {succes && <div className={styles.succes}>{succes}</div>}
              </div>
            </div>
            <div className={styles.absolute}>
              <i className="mdi mdi-copyright" />
              <span>2023 Strix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
