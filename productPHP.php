<html>
    <head>
        <title>PHP submission</title>
    </head>

    <body>
        
        <?php
            $idNum = $_POST["id-num"];
            $quantity01 = $_POST["quantity-01"];
            $quantity02 = $_POST["quantity-02"];
            $price01 = $_POST["price-01"];
            $price02 = $_POST["price-02"];
            $inStock = $_POST["in-stock"];
            
            if ($idNum < 1 || $idNum > 20) {
                echo "product id is out of range."; 
            }
            else {
                $jsonProductString = file_get_contents("products.json");
                $productData = json_decode($jsonProductString, true);

                $productData[$idNum - 1]["quantity01"] = $quantity01;
                $productData[$idNum - 1]["quantity02"] = $quantity02;
                $productData[$idNum - 1]["price01"] = $price01;
                $productData[$idNum - 1]["price02"] = $price02;
                $productData[$idNum - 1]["stock"] = $inStock;

                $newJsonString = json_encode($productData);
                file_put_contents("products.json", $newJsonString);

                echo "Update Successful";
            }
        ?>
        
        <p>Would you like to update another product?</p>
        <input type="button" id="new-update" value="yes"/>
        <input type="button" id="return-home" value="no"/>
        <script>
            //user chooses to enter another product or finish
            document.getElementById("new-update").addEventListener("click", () => {
                window.open("admin1973.html", "_self");
            });

            document.getElementById("return-home").addEventListener("click", () => {
                window.open("index.html", "_self");
            });
        </script>
    </body>
</html>
