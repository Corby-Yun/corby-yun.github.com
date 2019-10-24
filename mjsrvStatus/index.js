var MojangAPI;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState==4 && xhr.status==200) {
    MojangAPI = JSON.parse(xhr.responseText);
    $(".minecraftnet").css("background",MojangAPI[0]["minecraft.net"]);
    $(".sessionminecraftnet").css("background",MojangAPI[1]["session.minecraft.net"]);
    $(".texturesminecraftnet").css("background",MojangAPI[6]["textures.minecraft.net"]);
    $(".apimojangcom").css("background",MojangAPI[5]["api.mojang.com"]);
    $(".accountmojangcom").css("background",MojangAPI[2]["account.mojang.com"]);
    $(".authservermojangcom").css("background",MojangAPI[3]["authserver.mojang.com"]);
    $(".sessionservermojangcom").css("background",MojangAPI[4]["sessionserver.mojang.com"]);
    $(".mojangcom").css("background",MojangAPI[7]["mojang.com"]);
  }
}
xhr.open("GET","https://status.mojang.com/check");
xhr.send();