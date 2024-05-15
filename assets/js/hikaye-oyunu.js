// Hikaye Baslangici

alert("Bir zamanlar, uzak bir ülkede yaşayan bir kahramanın macerasına hoş geldiniz!");

// Karakter Secimi

let karakter = prompt("Lütfen karakterinizi seçin:\nA) Cesur Şövalye\nB) Bilge Büyücü");

if (karakter === "A") {
  let rota1 = prompt("Şövalye Roland, macerasına devam etmek için iki yol bulur:\nA) Ejderha Mağarası\nB) Elf Ormanı");
  if (rota1 === "A") {
      let rota2A = prompt("Ejderha Mağarası'nda karşılaştığı tehlikeleri aşmak için iki seçenek letdır:\nA) Ejderhayla Savaşmak\nB) Kaçmak ve Geri Dönmek");
      if (rota2A === "A") {
          let rota3A = prompt("Roland, ejderha ile savaşırken ne yapmalıdır:\nA) Kılıcıyla Savaşmak\nB) Ejderhayı Aldatmak");
          if (rota3A === "A") {
              let rota4A = prompt("Roland, ejderhayla savaşırken ne yapmalıdır:\nA) Cesurca Savaşmak\nB) Ejderha ile Pazarlık Yapmak");
              if (rota4A === "A") {
                  let rota5A = prompt("Roland, savaş sırasında ne yapmalıdır:\nA) Dikkatlice Hareket Etmek\nB) Kılıcını Savurmak");
                  if (rota5A === "A") {
                      let rota6A = prompt("Roland, ejderhayı yenerse ne yapmalıdır:\nA) Hazineyi Almak\nB) Ejderhayı Affetmek");
                      if (rota6A === "A") {
                          let rota7A = prompt("Roland, hazineyi alırken ne yapmalıdır:\nA) Dikkatlice Çalmak\nB) Aceleyle Almak");
                          if (rota7A === "A") {
                              let rota8A = prompt("Roland, hazineyi alırken ne yapmalıdır:\nA) Sessizce Ayrılmak\nB) Sevinçle Yüklenmek");
                              if (rota8A === "A") {
                                  let rota9A = prompt("Roland, ejderhayı yendikten sonra ne yapmalıdır:\nA) Onu Öldürmek\nB) Ona Teşekkür Etmek");
                                  if (rota9A === "A") {
                                      let rota10A = prompt("Roland, ejderhayı öldürdükten sonra ne yapmalıdır:\nA) Zaferle Geri Dönmek\nB) Ejderhayı Anımsamak");
                                      if (rota10A === "A") {
                                          alert("Roland, ejderhayı yendikten sonra hazineyi alır ve zaferle geri döner!");
                                      } else if (rota10A === "B") {
                                          alert("Roland, ejderhayı öldürdükten sonra pişmanlık duyar ve geri döner, hazineyi alamaz.");
                                      } else {
                                          alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                                      }
                                  } else if (rota9A === "B") {
                                      alert("Roland, ejderhayı yendikten sonra ona teşekkür eder ve hazineyi alır, ancak ejderha onu affetmez ve hazineyi geri alır.");
                                  } else {
                                      alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                                  }
                              } else if (rota8A === "B") {
                                  alert("Roland, sevinçle hazineyi yükler ancak dikkatsiz davranır ve hazine ejderhanın gazabına uğrar.");
                              } else {
                                  alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                              }
                          } else if (rota7A === "B") {
                              alert("Roland, aceleyle hazineyi alır ve dikkatsiz davranır, ejderhanın gazabına uğrar.");
                          } else {
                              alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                          }
                      } else if (rota6A === "B") {
                          alert("Roland, ejderhayı affeder ancak hazineyi alamaz, ejderha onu geri çevirir.");
                      } else {
                          alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                      }
                  } else if (rota5A === "B") {
                      alert("Roland, kılıcını savurur ancak isabet etmez, ejderha ona saldırır ve hazineyi alamaz.");
                  } else {
                      alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                  }
              } else if (rota4A === "B") {
                  alert("Roland, ejderha ile pazarlık yapar ancak başarısız olur, ejderha ona saldırır ve hazineyi alamaz.");
              } else {
                  alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
              }
          } else if (rota3A === "B") {
              alert("Roland, ejderhayı aldatarak hazineyi çalar ve tehlikeden kaçar!");
          } else {
              alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
          }
      } else if (rota2A === "B") {
          alert("Roland, ejderhanın gücünden korkar ve geri döner, hazineyi alamaz.");
      } else {
          alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
      }
  } else if (rota1 === "B") {
    let rota2B = prompt("Elf Ormanı'nda ilerlerken iki yol ayrımıyla karşılaşır:\nA) Büyülü Gölün Yanından Geçmek\nB) Korkunç Canaletların Olduğu Mağaraya Girmek");
    if (rota2B === "A") {
          let rota3B = prompt("Roland, büyülü gölün yanından geçerken ne yapmalıdır:\nA) Suyun Gücünden Faydalanmak\nB) Hızlıca Geçmek");
          if (rota3B === "A") {
              let rota4B = prompt("Roland, suyun gücünü kullanarak ne yapmalıdır:\nA) Yüzmek\nB) Su Sihirbazına Danışmak");
              if (rota4B === "A") {
                  let rota5B = prompt("Roland, suyun gücünü kullanarak ne yapmalıdır:\nA) Hızla Geçmek\nB) Sakin Olarak Geçmek");
                  if (rota5B === "A") {
                      let rota6B = prompt("Roland, suyun gücünü kullanarak ne yapmalıdır:\nA) Sihirli Taşları Toplamak\nB) Uzun Süre Yüzerek Gitmek");
                      if (rota6B === "A") {
                          let rota7B = prompt("Roland, suyun gücünü kullanarak ne yapmalıdır:\nA) Su Canaletlarına Karşı Koymak\nB) Hızla Ayrılmak");
                          if (rota7B === "A") {
                              let rota8B = prompt("Roland, su canaletlarına karşı ne yapmalıdır:\nA) Kılıcı Kullanmak\nB) Sihirli Taşları Kullanmak");
                              if (rota8B === "A") {
                                  let rota9B = prompt("Roland, su canaletlarına karşı ne yapmalıdır:\nA) Birlikte Savaşmak\nB) Ayrılmak ve Tek Tek Savaşmak");
                                  if (rota9B === "A") {
                                      let rota10B = prompt("Roland, su canaletlarına karşı ne yapmalıdır:\nA) Zaferle Geri Dönmek\nB) Yaraları Sararak Ayrılmak");
                                      if (rota10B === "A") {
                                          alert("Roland, su canaletlarını yendikten sonra hazineye ulaşır ve zaferle geri döner!");
                                      } else if (rota10B === "B") {
                                          alert("Roland, su canaletlarına karşı savaşırken ağır yaralanır ve hazineye ulaşamaz.");
                                      } else {
                                          alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                                      }
                                  } else if (rota9B === "B") {
                                      alert("Roland, su canaletlarına karşı savaşırken tek tek ayrılmayı dener ancak başarısız olur, hazineye ulaşamaz.");
                                  } else {
                                      alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                                  }
                              } else if (rota8B === "B") {
                                  alert("Roland, sihirli taşları kullanarak su canaletlarını etkisiz hale getirir ve hazineye ulaşır!");
                              } else {
                                  alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                              }
                          } else if (rota7B === "B") {
                              alert("Roland, hızla su canaletlarından kaçar ancak hazineye ulaşamaz.");
                          } else {
                              alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                          }
                      } else if (rota6B === "B") {
                          alert("Roland, uzun süre yüzmeye çalışır ancak yorgun düşer ve hazineye ulaşamaz.");
                      } else {
                           alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                      }
                  } else if (rota5B === "B") {
                      alert("Roland, sakin bir şekilde suyun gücünü kullanarak geçer ancak hazineye ulaşamaz.");
                  } else {
                      alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                  }
              } else if (rota4B === "B") {
                  alert("Roland, su sihirbazına danışarak hazineye ulaşır ancak onun kurbanı olur ve hazineye ulaşamaz.");
              } else {
                  alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
              }
          } else if (rota3B === "B") {
              alert("Roland, korkusuzca mağaraya girer ancak canaletlar tarafından yenilir ve hazineye ulaşamaz.");
          } else {
              alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
          }
      } else {
          alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
      }
  } else {
      alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
  }
} else if (karakter === "B") {
    let yol1 = prompt("Bilge Büyücü, macerasına devam etmek için iki yol bulur:\nA) Büyülü Orman\nB) Sahil Kenarı");
    if (yol1 === "A") {
        let yol2A = prompt("Büyülü Orman'da bir kitap bulur:\nA) Kitabı Almalı\nB) Kitabı Bırakmalı Ve Yoluna Devam Etmeli");
        if (yol2A === "A") {
            let yol3A = prompt("Kitapta hayatta kalması için gerekli büyüler yazmaktadır:\nA) Büyüleri Öğrensin\nB) Gereksiz Bilgiler Diyip Öğrenmesin");
            if (yol3A === "A") {
                let yol4A = prompt("Karşısına çıkan yılan şeklinde tuhaf bir yaratık çıkar:\nA) Öğrendiği Büyülerle Onunla Savaşsın\nB) Yılanı Pas Geçsin");
                if (yol4A === "A") {
                    let yol5A = prompt("Yılanı öğrendiği büyü ile yener ve yoluna devam eder. Yoluna devam ederken büyük bir şelale görür:\nA) Şelalenin İçine Doğru İlerlesin\nB) Şelalenin Döküldüğü Yerden Su İçsin");
                    if (yol5A === "A") {
                        let yol6A = prompt("Timsah ile karşılaşır. Timsah uyumaktadır:\nA) Timsahı Pas Geçsin\nB) Timsahı Uyandırıp Altında Sakladığı Elmas Parçasını Almaya Çalışsın");
                        if (yol6A === "A") {
                            let yol7A = prompt("Yoluna devam ederken gizemli bir mağara görür:\nA) Mağaraya Gir\nB) Mağarayı Pas Geç");
                            if (yol7A === "A") {
                                let yol8A = prompt("Mağarada bir ışık huzmesi fark eder:\nA) Işığa Doğru İlerlesin\nB) Geri Dönsün");
                                if (yol8A === "A") {
                                    let yol9A = prompt("Işığa yaklaştıkça bir hazine sandığı görür:\nA) Sandığı Açsın\nB) Sandığı Bırakıp Geri Dönsün");
                                    if (yol9A === "A") {
                                        let yol10A = prompt("Sandığın içinde büyülü bir küre bulur:\nA) Küreyi Kullansın\nB) Küreyi Yanına Alsın ve Ayrılsın");
                                        if (yol10A === "A") {
                                            alert("Bilge Büyücü, küreyi kullanarak ormanın barışını yeniden sağlar ve herkes mutlu olur. Macera sona erdi.");
                                        } else if (yol10A === "B") {
                                            alert("Bilge Büyücü, küreyi yanına alarak güvenli bir şekilde evine döner. Macera sona erdi.");
                                        } else {
                                            alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                                        }
                                    } else if (yol9A === "B") {
                                        alert("Bilge Büyücü, sandığı bırakıp geri döner ve ormanın barışını sağlar. Macera sona erdi.");
                                    } else {
                                        alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                                    }
                                } else if (yol8A === "B") {
                                    alert("Bilge Büyücü, mağaradan geri dönerek ormanın dışına çıkar. Macera sona erdi.");
                                } else {
                                    alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                                }
                            } else if (yol7A === "B") {
                                alert("Bilge Büyücü, mağarayı pas geçip yoluna devam eder ve sonunda ormanın barışını sağlar. Macera sona erdi.");
                            } else {
                                alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                            }
                        } else if (yol6A === "B") {
                            alert("Timsahı uyandırdığı için ve timsaha karşı öğrendiği büyüler yetmediği için karakterimizi timsah yedi. Macera sona erdi.");
                        } else {
                            alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                        }
                    } else if (yol5A === "B") {
                        alert("Su içerken timsahı uyandırır ve timsah ona saldırır. Karakterimiz ölür. Macera sona erdi.");
                    } else {
                        alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                    }
                } else if (yol4A === "B") {
                    alert("Karşısına çıkan yılan şeklinde tuhaf bir yaratık büyücümüze saldırır ve onu öldürür. Macera sona erdi.");
                } else {
                    alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                }
            } else if (yol3A === "B") {
                alert("Karşısına çıkan yılan şeklinde tuhaf bir yaratık büyücümüze saldırır ve onu öldürür. Macera sona erdi.");
            } else {
                alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
            }
        } else if (yol2A === "B") {
            alert("Karşısına çıkan yılan şeklinde tuhaf bir yaratık büyücümüze saldırır ve onu öldürür. Macera sona erdi.");
        } else {
            alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
        }
    } else if (yol1 === "B") {
        let yol2B = prompt("Sahil Kenarında yürürken konuşan bir kurtla karşılaşır:\nA) Kurtla Konuşup Arkadaş Olmalı\nB) Kurdu Pas Geçip Yoluna Devam Etmeli");
        if (yol2B === "A") {
            let yol3B = prompt("Kurt ona daha önce hiç bilmediği büyüleri öğretir ve onu ailesiyle tanıştırmak için bir yere götürmek ister:\nA) Kurt ile Beraber Gitmeyi Reddeder ve Sahilden Devam Eder\nB) Kurt ile Beraber Gider");
            if (yol3B === "A") {
                let yol4B = prompt("Kurt ona trip atar ve arkadaşlığını keser. Öğrettiği değerli büyüler karşılığında hayatından 30 yıl eksilmesini talep eder:\nA) Kabul Eder\nB) Kabul Etmez");
                if (yol4B === "A") {
                    let yol5B = prompt("Kabul ettiği için karakterimiz 45 yaşında ölecektir. Şu anda yaşı 38dir:\nA) Bu bilgiye aldanmayıp sahilde dolaşmaya devam eder.\nB) Dayanamaz sahilde bulduğu taş parçasıyla kafasına vurarak beyin kanaması geçirir");
                    if (yol5B === "A") {
                        let yol6B = prompt("Sahilde yürümeye devam ederken ufak bir mağara görür:\nA) Mağaranın İçine Girer\nB) Mağaranın Etrafında Dolanır");
                        if (yol6B === "A") {
                            let yol7B = prompt("Mağaranın içinde altın dolu bir hazine görür ve karakterimiz artık zengin olmuştur. Macera bitti.");
                        } else if (yol6B === "B") {
                            alert("Mağaranın etrafında zehirli gaz bulunmaktadır. Koku duyusu zayıf olduğundan dolayı yürüdükten 2 dakika sonra bayılıp yere düşer. Yere düştükten sonra etrafındaki yırtıcılar karakterimizi öldürüp yerler. Macera sona erdi.");
                        } else {
                            alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                        }
                    } else if (yol5B === "B") {
                        alert("Karakterimiz beyin kanamasından öldü. Macera sona erdi.");
                    } else {
                        alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                    }
                } else if (yol4B === "B") {
                    alert("Kabul etmediği için kurt sinirlenir ve bir anda sahile bütün dostlarını toplar. Dostlarının birkaç tanesini büyücümüz öldürür fakat sonrasında yorgun düştüğü için kurt onu öldürür. Macera sona erdi.");
                } else {
                    alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
                }
            } else if (yol3B === "B") {
                alert("Kurt onu kandırdı. Ailesiyle birlikte pusu kurdular ve büyücümüzü öldürüp afiyetle yediler. Macera sona erdi.");
            } else {
                alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
            }
        } else if (yol2B === "B") {
            alert("Yoluna devam ederken aniden denizden çıkan dev bir yengeç tarafından yakalanır ve büyücümüz ölür. Macera sona erdi.");
        } else {
            alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
        }
    } else {
        alert("Geçersiz bir seçenek girdiniz, macera sona erdi.");
    }
} else {
    alert("Geçersiz bir karakter seçimi yaptınız, macera sona erdi.");
}
