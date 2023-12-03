# pp_projekat
U nastavku je predstavljen tutorijal za pisanje programa u programskom jeziku definisanom za projekat iz predmeta Programski prevodioci.
Sadržaj programskog jezika
Programski jezik se naziva Kuvar, inspirisan je vec postojecim izotericnim jezikom pod nazivom Chef. Cilj nije bio iskopirati jezik koji vec postoji, vec uzeti ideju i implementirati svoju verziju pomenutog jezika.
Uz pomoc jezika Kuvar, programiranje se pretvara u kuvanje. Programski kod predstavljaju recepti za razna jela, koja kada se skuvaju (iskompajliraju) postaju ukusna jela.


Funkcionalnost: main
Ova funkcionalnost predstavlja: pocetak  i kraj programa
Ova funkcionalnost se piše na sledeći način: ime recepta, primer:--palacinke, zavrsava se sa posluziti
Funkcionalnost: deklaracija
Ova funkcionalnost predstavlja: Promenljive koje cemo koristiti, sve moraju imaju kolicinu u ml ako je tecno ili u gramima ako je stanje cvrsto. One predstavljaju nazive sastojka. Konkretan naziv sastojka nije relevantan, ono sto je bitno jeste kolicina koja se prevodi u ascii kod.
Ova funkcionalnost se piše na sledeći način: Sastojci: i ispod toga se navode sastojci zasebno u svakoj liniji u formatu  [kolicina] [[g ili ml]] sastojak

Funkcionalnost: body
Ova funkcionalnost predstavlja: Listu instrukcija za pripremanje jela.
Ova funkcionalnost se piše na sledeći način: uputstvo:

Funkcionalnost: ispis
Ova funkcionalnost predstavlja: ispisivanje sadrzaja pleha za pecenje na standardni izlaz
Ova funkcionalnost se piše na sledeći način: posluzi

Funkcionalnost: ulaz
Ova funkcionalnost predstavlja: ucitava integer sa standardnog ulaza i cuva ga u promenljivu *sastojak*, kao kolicina tog sastojka
Ova funkcionalnost se piše na sledeći način: uzmi *sastojak* iz frizidera

Funkcionalnost: while
Ova funkcionalnost predstavlja: Moguce su iteracije nad odredjenim nizom.
Ova funkcionalnost se piše na sledeći način: [glagol u infinitivu][ime sastojka] izvrsavace se sve dok kolicina sastojka ne bude 0
primer: dinstati luk
Funkcionalnost: do while/for
Ova funkcionalnost predstavlja: Moguce su iteracije sa odredjenim uslovom.
Ova funkcionalnost se piše na sledeći način: [glagol u infinitivu][ime sastojka][dok nije][glagol u proslom vremenu] 
primer: dinstati luk dok nije izdinstan
Funkcionalnost: break
Ova funkcionalnost predstavlja: Prekid petlje
Ova funkcionalnost se piše na sledeći način: ostavi da odstoji

Funkcionalnost: promena tipa deklarisane promenljive
Ova funkcionalnost predstavlja: Mogucnost promene int-a u char.
Ova funkcionalnost se piše na sledeći način: razredi

Funkcionalnost: lista
Ova funkcionalnost predstavlja: Funkcionalnost dodavanja sastojka u listu, mozemo imati vise listi
Ova funkcionalnost se piše na sledeći način: stavi u *prvu* ciniju



Funkcionalnost: kreiranje ispisa
Ova funkcionalnost predstavlja: Funkcionalnost spajanja sadrzaja iz listi, i kreiranja ispisa.
Ova funkcionalnost se piše na sledeći način: presipaj sadrzaj *prve* cinije u pleh za pecenje



Funkcionalnost: sabiranje
Ova funkcionalnost predstavlja:  Sabiranje dva elementa liste, sabire se element iz promenljive  sa elementom na pocetku liste - a + lista[0]
Ova funkcionalnost se piše na sledeći način: dodaj a u *prvu* ciniju

Funkcionalnost: oduzimanje
Ova funkcionalnost predstavlja: Oduzimanje dva elementa liste, uklanja se element na pocetku liste- a - lista[0]
Ova funkcionalnost se piše na sledeći način: ukloni a iz prve cinije

Funkcionalnost: deljenje
Ova funkcionalnost predstavlja: Deli dva elementa liste, deli se sa elementom na pocetku liste- a / lista[0]
Ova funkcionalnost se piše na sledeći način: podeli a u ciniji

Funkcionalnost: pop
Ova funkcionalnost predstavlja: sa vrha liste mozemo snimiti vrednost elementa u promenljivoj. funckionise kao pop, tako da se element brise iz liste
Ova funkcionalnost se piše na sledeći način: pokupi a iz *prve* cinije

Funkcionalnost: if
Ova funkcionalnost predstavlja: uslovni operator
Ova funkcionalnost se piše na sledeći način: ako ima vise brasna od mleka dodaj vodu u ciniju









