const leftArrow = $("#left-arrow");
const rightArrow = $("#right-arrow");
const sliding_car_container = $(".sliding-car-container");
const carNumber = $(".car-number span");

// sliding variables
let mobileCount = 0;
let mediumCount = 0;
let largeCount = 0;

if (window.innerWidth < "451") {
    // for small devices
    rightArrow.click(function () {
        if (mobileCount < 5) {
            sliding_car_container.animate({ "margin-left": "-=100%" });
            carNumber.text(mobileCount + 2);
            mobileCount++;
        }
    });
    leftArrow.click(function () {
        if (mobileCount > 0) {
            sliding_car_container.animate({ "margin-left": "+=100%" });
            carNumber.text(mobileCount);
            mobileCount--;
        }
    });
} else if (window.innerWidth < "769") {
    // for medium devices
    carNumber.text("2");

    rightArrow.click(function () {
        if (mediumCount < 4) {
            sliding_car_container.animate({ "margin-left": "-=50%" });
            carNumber.text(mediumCount + 3);
            mediumCount++;
        }
    });
    leftArrow.click(function () {
        if (mediumCount > 0) {
            sliding_car_container.animate({ "margin-left": "+=50%" });
            carNumber.text(mediumCount + 1);
            mediumCount--;
        }
    });
} else if (window.innerWidth > "768") {
    // for large devices
    carNumber.text("4")

    rightArrow.click(function () {
        if (largeCount < 2) {
            sliding_car_container.animate({ "margin-left": "-=25%" });
            carNumber.text(largeCount + 5)
            largeCount++;
        }
    });
    leftArrow.click(function () {
        if (largeCount > 0) {
            sliding_car_container.animate({ "margin-left": "+=25%" });
            carNumber.text(largeCount + 3);
            largeCount--;
        }
    });
}
