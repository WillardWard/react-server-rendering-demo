// const express = require("express");
import React from "react";
import express from "express";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";

import { App } from "../client/App";

const app = new express();

app.use(express.static("dist"));

app.get("/", async (_req, res) => {
  const index = readFileSync(`public/index.html`, `utf8`);
  const rendered = renderToString(<App />);
  res.send(index.replace("{{rendered}}", rendered));

  // res.send(`<h1>REACT IS EXCELLENT</h1>`);
});

app.listen(7777);
console.info("Server is listening.");
