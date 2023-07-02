import React from "react";

export default function Advertisment() {
    return (
        <div className="advertisment">
            <div className="ad-container row">
                <img src="/images/shopify.png" alt="shopify" className="ad-photo col-lg-3 col-md-2 col-sm-6" />
                <img src="/images/lenovo.png" alt="lenovo" className="ad-photo col-lg-3 col-md-2 col-sm-6" />
                <img src="/images/google.png" alt="google" className="ad-photo col-lg-3 col-md-2 col-sm-6" />
                <img src="/images/microsoft.png" alt="microsoft" className="ad-photo col-lg-3 col-md-2 col-sm-6" />
            </div>
        </div>
    );
}