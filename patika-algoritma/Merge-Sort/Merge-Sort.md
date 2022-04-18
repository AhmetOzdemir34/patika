# Merge Sort Projesi
## [16,21,11,8,12,22] --> Merge Sort

1.**Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.**

> 
    **Öncelikle Mid elemanı seçilir**
    -Dizinin boyutu 6 olduğu için   mid elemanı 2. indisteki 11 e karşılık gelir.Sonrasında aynı şekilde tekrar 2 ye böleriz diziyi.
    [16,21,11]   ve [8,12,22] den oluşan iki parça olur elimizde.Tekrar 2 ye böleriz.
    -Dizideki elemanlar tek kalıncaya kadar dizi ikiye bölünür aynı şekilde 
     1. [16,21] ve [11] sol tarafta        [8,12]  ve [22] sağ tarafta kalır 
     2. [16] [21]  [11]                    [8] [12] [22]
     3. Tüm elemanlar tek başına kalınca karşılaştırıp sıralı bir şekilde birleştiriyoruz.
     4. [16,21] ve [11]  sol tarafta        [8,12] ve [22] sağ tarafta  
     5. [11,16,21] -> sol tarafta     [8,12,22] -> sağ tarafta
     6. [8,11,12,16,21,22]  en sonunda dizimiz sıralı hale geliyor.
        
2.**Big-O Gösterimi Yapınız.**
>
    Dizi sürekli 2 ye bölündüğü içi n n/2 n/4  log(n) geliyor.Bir de inputtan gelen dizinin büyükten küçüğe gelme durumunda dizi boyutu kadar adım işlenir (N). Bununla beraber O(n log n) değeri çıkar.



