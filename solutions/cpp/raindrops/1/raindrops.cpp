#include "raindrops.h"
#include <string>

namespace raindrops {
    std::string convert (int number) {
        std::string sounds = "";

        if (number % 3 == 0) {
            sounds = sounds + "Pling";
        }

        if (number % 5 == 0) {
            sounds = sounds + "Plang";
        }

        if (number % 7 == 0) {
            sounds = sounds + "Plong";
        }

        if (sounds == "") {
            sounds = std::to_string(number);
        }

        return sounds;
    }
} 
