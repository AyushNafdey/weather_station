console.log("JS loaded");
document.addEventListener("DOMContentLoaded", () => {
    let current_temp = document.getElementById('current-temp');
    let temp_cel = document.getElementById('card-temp');
    let humidity = document.getElementById("card-humidity")
    let co2 = document.getElementById("card-co2")

    async function fetchData() {
        try {
            const response = await fetch("http://192.168.29.243/data");
            const data = await response.json();
            console.log(data)

            current_temp.textContent = `${data.temp_cel}°C`;
            temp_cel.textContent = `${data.temp_cel}°C`;
            humidity.innerHTML = data.humidity + "%";
            // co2.innerHTML = data.co2 + " PPM";
        }
        catch (e) {
            console.log("Error: ", e);
        }
    }
    fetchData();
    setInterval(fetchData, 2000);
});