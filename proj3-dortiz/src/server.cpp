#include "crow.h"
#include <string>

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/api/encode")
    .methods(crow::HTTPMethod::POST)
    ([](const crow::request& req) {

        std::string fileContent = req.body;

        // Temporary test response
        return "C++ received: " + fileContent;
    });

    app.port(8080).run();
}