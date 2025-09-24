console.log("JS loaded");
document.addEventListener("DOMContentLoaded", () => {
    let current_temp = document.getElementById('current-temp');
    let temp_cel = document.getElementById('card-temp');
    let humidity = document.getElementById("card-humidity")
    let co2 = document.getElementById("card-co2")

    async function fetchData() {
        try {
            const response = await fetch("https://mayme-transcriptional-unsoftly.ngrok-free.dev/data");
            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
                return;
            }
            const data = await response.json();
            console.log(data)

            current_temp.textContent = `${data.temp_cel}°C`;
            temp_cel.textContent = `${data.temp_cel}°C`;
            humidity.textContent = `${data.humidity}%`;
            // co2.innerHTML = data.co2 + " PPM";
        }
        catch (e) {
            console.log("Error: ", e);
        }
    }
    fetchData();
    setInterval(fetchData, 2000);
});