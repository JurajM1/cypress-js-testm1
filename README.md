# cypress-js-testm1
Stwórz polecenie login, które odnajdzie pole mail i hasło, wpisze tam dane i kliknie na przycisk Log In.

Test 1.

a. Test otworzy stronę https://www.edu.goit.global/account/login

b. Użyj polecenia logowania.

I. Polecenie odnajdzie pole email i wpisze email **[user888@gmail.com](mailto:user888@gmail.com)**.
II. Wprowadzi hasło **1234567890**
III. Wciśnie przycisk **Log in**
IV. Znajdzie przycisk w prawym górnym rogu
V. Otwiera menu strony
VI. W menu znajduje przycisk Log out
VII. Klika na niego i wraca do strony logowania

Test 2.

a. W teście wyświetli się strona https://www.edu.goit.global/account/login
b. Użyj własnego polecenia logowania.
I. Polecenie odnajdzie pole email i wpisze email testowyqa@qa.team.
II. Wprowadzi hasło QA!automation-1.
III. Wciśnie przycisk Log in.
IV. Znajdzie przycisk w prawym górnym rogu
V. Otwiera menu strony
CLICK1. W menu znajduje przycisk **Log out** 2. Klikamy na niego i wracamy do strony logowania

Przepisz pracę domową z poprzedniego modułu z wykorzystaniem wzorca Page object pattern.
Każda strona powinna mieć swój własny plik w folderze pages a. Dla strony logowania musi istnieć plik Login.js. b. Dla strony głównej powinien istnieć plik HomePage.js.

Wykorzystaj publiczne API - https://httpbin.org/#/

Napisz serię testów dla tego API. Powinno ich być co najmniej 10 i powinny być w nich uwzględnione następujące aspekty:

wykorzystanie różnych metod HTTP (GET/POST/etc)
wysyłanie i sprawdzanie nagłówków, zarówno standardowych (User-Agent), jak i niestandardowych
wysyłanie parametrów zapytania, w tym losowych
sprawdzanie treści odpowiedzi
sprawdzanie czasu trwania wniosku
