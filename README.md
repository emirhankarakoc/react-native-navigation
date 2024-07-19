# react-native-navigation
## stackin icerisindeki diger componente gecmek (tabagi kaldirmak veya yenisini koyma)

1- navigator folderina girip app navigatora yeni bir satir ekleyin.<br>
reactteki `path` ve `element` parametreleri burada `name` ve `element` seklindedir.<br>
name yerine isim girecegiz, endpoint degil. 

reactte window.location.href = "/endpoint" yapiyorduk. sekmeyi yonlendiriyorduk, bu sayede o endpointi handle eden component aciliyordu.<br>
2- simdi componentlere gonderilmis statei handle eder gibi {{navigation}} yazip koyuyoruz. (HomeScreen, SecondScreen.js dosyalarindaki gibi)
<br>

3- onClick()'lere, `navigation.navigate(`sayfaIsmi`)}` seklinde yapiyoruz. ve bu is bu kadar.


## stackten cikip diger stacke gecmek (tabak ekleyip cikartadan, durulayip baska tabaklara gecme sekli)

1- gidin AB, CD gibi AppNavigator.js ve AuthNavigator.js olusturun. <br>
2- Rootnavigator'da onlara isim verin ve initialRouteNameu bizim yaptigimiz gibi manipule edin (token varsa app, yoksa authu aciversin)<br>
3- login metoduna gittiginiz zaman, navigation.reset yaptiginiz zaman indexi ellemeyin.<br>
routes'in icerisinde birinci parametreye navigatoru, ikinci parametreye de screenin ismini KOYUN VE ZIMBALAYIN.

<br>
<br>
bu repo, haziran 2024 itibariyle 5. sinifa gecmis olan, PAMUKKALE UNIVERSITESI BILGISAYAR MUHENDISLIGI OGRENCISI YAKUP BEY sayesinde guncellenmis ve gelistirilmistir. o olmasa bu repo bombok halde olurdu.
<br>
temmuz 2024, emirhan karakoc.
