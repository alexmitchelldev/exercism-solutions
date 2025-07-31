#include <string>

namespace log_line {
    std::string message (std::string log_entry) {
        int colon_index = log_entry.find(":");

        std::string log_message = log_entry.substr(colon_index + 2);

        return log_message;       
    }

    std::string log_level (std::string log_entry) {
        int opening_square_bracket = log_entry.find("[");
        int closing_square_bracket = log_entry.find("]");

        std::string log_status = log_entry.substr(opening_square_bracket +1, closing_square_bracket -1);

        return log_status;
    }

    std::string reformat (std::string log_entry) {
        std::string formatted = message(log_entry) + " (" + log_level(log_entry) + ")";

        return formatted;
    }
}
