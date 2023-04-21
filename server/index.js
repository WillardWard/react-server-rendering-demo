// const express = require("express");

import express from "express";
const app = new express();

app.get("/", async (_req, res) => {
  res.send(`<h1>REACT IS EXCELLENT</h1>`);
});

app.listen(7777);
console.info("Server is listening.");
