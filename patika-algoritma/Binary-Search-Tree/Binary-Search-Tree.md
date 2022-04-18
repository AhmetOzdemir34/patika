İlk adım olarak diziyi sıralarız.
[0,1,2,3,4,5,6,7,8,9]
Binary-search tree için en güzel sıralama şekli root elemanını mid olarak seçmektir. Çünkü sağa sola eşit adım sağlar
Burda 4 veya 5 seçmek bize kalmış bi durumdur. Ben 5 ü seçiyorum.
Artık dizimiz 2 ye ayrılmış durumda. Ayrılan diziler içinde de mid elemanlarını seçerek en kısa uzunlukta bir ağaç yapısı oluşturacağım.

ROOT elemanımız : 4
Solunda 2 - Sağında 7
Sol tarafından devam ediyorum.
    2 düğümünün solunda 1 sağında 3 bulunuyor. 3 den büyük 4 olduğu için sağına ekliyorum. 1 den daha küçük eleman da mevcut. 1 düğümünden devam ediyorum.
    1 düğümünün solunda 0 sağı boş.
    
    Sol taraf bitti
Sağ tarafta ki 7 düğümünden devam ediyorum.
    7 düğümünün solunda 6 sağında 8 bulunuyor. 6 dan küçük eleman mevcut değil ama büyük  mevcut , büyük olan sayı 8 den de büyük olduğu için onu  8 in sağına yerleştirmem gerekiyor.
    8 düğümüne geçtiğim zaman 9 sayısı 8 den büyük olduğu için sağına yerleşir.
    Sağ taraf da bitti.


                            5
                         /    \
                       2        7
                      /\       / \ 
                     1  3     6   8
                    /    \         \
                   0      4          9