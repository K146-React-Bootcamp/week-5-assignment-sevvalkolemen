# React Memoization Nedir?
Hesaplanması uzun süren işlevlerimizin sonuçlarını saklayarak aynı girdiler için aynı işlev
çağrıldığında: işlevin tekrar çalıştırılmadan saklanılan sonucunun dönülmesine Memoization 
denir. Sonuçların saklanması işlemi ucuz değildir. Bu yüzden sadece maliyetli ve aynı 
girdilerle aynı çıktıkları üreten işlevlerde kullanılması önemlidir.

### **React.memo**
Bileşeni saran üst katman bir bileşendir. Bileşinin aldığı props’ları yüzeysel olarak kontrol 
ederek, bir değişiklik yoksa son render edilen sonucu kullanır. Props kontrolleri üzerinde 
yetki sahibi olabilmek için, React.memo’ya ikinci parametre olarak bir işlev veririz. Bu işlev 
iki parametre alır. İlki mevcut props değerleri, ikincisi ise yeni props değerleridir. Bu işlev 
true değeri döndüğünde props değişikliği olmadığı için yeniden render işlemi yapılmaz. False 
döndüğünde bileşen yeniden render edilir.

### **useMemo**
Memoization tekniğinin React hook’u olarak yapılmasını sağlayan işlevdir. İki parametre alır, 
ilki memoization uygulamak istediğimiz işlemi tutan bir işlevdir. Diğeri o işlemin girdilerini 
tutan bir deps dizisidir.

### **useCallback**
useMemo’nun aksine aldığı işlevin sonucunu saklamak yerine işlevin kendisini saklar. Deps 
olarak verilen değerleri değişmediği sürece de sakladığı işlevi döndürür. Bu işlemin faydası, 
bileşen içinde tanımladığımız işlevler, o bileşen yeniden render edildiğinde yeniden 
tanımlanır ve farklı bir referansa sahip olur. Bu yüzden bu işlevler props olarak iletildiğinde 
aslında işlev değişmemesine rağmen iletildiği bileşenin yeniden render edilmesine neden olur