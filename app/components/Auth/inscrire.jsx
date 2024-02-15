"use client";
import styles from "@/styles/auth/login.module.css";
import React, { useState } from "react";
import Image from "next/image";
import imginscrire from "@/assets/images/pretty.png";
import imgconnecter from "@/assets/images/cool.png";
import Link from "next/link";

export default function Inscrire() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [erreur, setErreur] = useState("");
  const [succes, setSucces] = useState("");

  const handleMail = (e) => setEmail(e.target.value);
  const handleName = (e) => setUserName(e.target.value);
  const handlePwd = (e) => setPassword(e.target.value);
  function error() {
    setTimeout(() => {
      setErreur("");
    }, 3000);
  }
  const handleConfirme = (e) => setConfPassword(e.target.value);
  const submitForm = async (e) => {
    e.preventDefault();
    if (!email || !userName || !password || !confPassword) {
      setSucces("");
      setErreur("Veuiller completer tous les champs ");
      error();
      return;
    } else if (password != confPassword) {
      setSucces("");
      setErreur("Verifier le mot de passe ");
      error();
      return;
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
            <h1 style={{ marginBottom: "1.4rem" }}>👋 Hello</h1>
            <div className={styles.separation}>
              <hr />
              <hr />
              <hr />
            </div>
            <div className={styles.formulaire}>
              <form
                onSubmit={submitForm}
                action=""
                style={{ display: "flex", flexDirection: "column" }}
              >
                <input
                  onChange={handleMail}
                  type="email"
                  placeholder="E-mail"
                />
                <input
                  onChange={handleName}
                  type="text"
                  placeholder="Utilisateur"
                />
                <input
                  onChange={handlePwd}
                  type="password"
                  placeholder="Mot de passe"
                />
                <input
                  onChange={handleConfirme}
                  type="password"
                  placeholder="Confirmer"
                />
                <button type="submit">S&apos;inscrire</button>
              </form>
              <div className={styles.subtitle}>
                <Link href={"/login"}>Se connecter</Link>
                <span>A propos</span>
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
