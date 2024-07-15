# react-native-navigation

1- navigator folderina girip app navigatora yeni bir satir ekleyin.<br>
reactteki `path` ve `element` parametreleri burada `name` ve `element` seklindedir.<br>
name yerine isim girecegiz, endpoint degil. 

reactte window.location.href = "/endpoint" yapiyorduk. sekmeyi yonlendiriyorduk, bu sayede o endpointi handle eden component aciliyordu.<br>
2- simdi componentlere gonderilmis statei handle eder gibi {{navigation}} yazip koyuyoruz. (HomeScreen, SecondScreen.js dosyalarindaki gibi)
<br>

3- onClick()'lere, `navigation.navigate(`sayfaIsmi`)}` seklinde yapiyoruz. ve bu is bu kadar.
