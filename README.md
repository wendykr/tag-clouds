# Práce se stavovými hodnotami - imutable/spread

## Tagy
Vyrobte v Reactu komponentu `TagCloud`, která bude umět zobrazovat tagy jako na obrázku.

![Ukázka možného výsledku](https://kodim.cz/cms/assets/czechitas/react-2/lekce/hodnoty-stav/cv-react/tagcloud/tagcloud.png)

1. Založte novou React aplikaci a vytvořte komponentu `TagCloud`.
2. Tagy uložte do stavu `tags` jako pole řetězců.
3. Přidejte do komponenty formulář s textovým políčkem, pomocí kterého bude možné zadat nový tag. Při odeslání formuláře přidejte nový tag na konec pole ve stavu `tags`. Dejte pozor, aby pole zůstalo immutable. Při přidání tagu vždy vyrobte nové pole pomocí spreadu.
4. Přidejte do komponenty tlačítko, které odstraní první tag ze seznamu. Opět zachovejte imutabilitu stavu.