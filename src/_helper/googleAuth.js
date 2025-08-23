import { GoogleAuth } from "google-auth-library";

export async function getAccessToken() {
    const credentials = {
        "type": "service_account",
        "project_id": "test-1d636",
        "private_key_id": "f8235233cac3fa5fe17ba2132f2158e63388f43d",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMoiHTOiY80TmL\nP+ggydUytgnyDGkE2gXhgo8ttB9hnmrcSc32KiTpiJSlYNeKDgGVpmzAZWCC/uRo\njkUWoKzwEWSnniDATKIMrLKZrHQp+c60DDXidS9gOrwJpPV6p1JGuUeeAcANZI60\n+I7Aenq0LYZ4FLFPQB6VirYg571G51Zyj5KThgwBv/+mh9ZoYcfm6Jk7+YxwdL/Z\ngpaVV+OapeP2+GOYow2IeQP366cmWklZptiKdKtQIR9fIrzxbQWp4X5VJ0hMNDLO\nkKGgDfpyY5yven4wgqVEsY9ncfQEp9crCIvC+UO/Kr5hs1248RInSuQtXqLzLCgx\nLOTnILrbAgMBAAECggEAMeYzU1uxqVDntFIQG7a721LSmAh4r2su1e/NVDrBED/e\nFPuWUrmyKJRakv1Lcem6bzCXAk92OltHfUt8A2mI4j2LiugfWmUVevu9zYVlCjtV\nMUhs91zWAaQw6DUmexNEF+TkVt5cY6equOyHet4i/76+NJfvKMEc9CBQCzQXTqt5\nIoglWvpUk6LlLkf7TW1Eg7469MPsQd2O7CopYUBImoWkmbc0Rnv2DosYeDJFAfkQ\nzhCYyEpvnYTMyUNzaZBJ+JCLg818kJLTraMKbiVI6NhT+smQQ5uEplpZmq3Y+e0Q\nV3IHMBkHN3wpCMR4tsFprSB/Crpl2Y4AX2fn6FuJAQKBgQDnPPvErLQ8pK+fEez7\nfcVO0M4C1Vi5fJxKbqodWfQvVKleJ4NxoVDh8zRXCYWBLTmsSWMgawmZITFC3ZCa\nYJ+pP80EGYvdiqSIU2cYWQPixfIcAtjOBLsz+bl+6NPWleL+jtQtsoXbmMCYQcX2\n4pKm4jXRUfuFXNDdzIqQQM29WwKBgQDii9G8U6hocRy7GeWGxysC3aQRTITnCzRI\nePDk0z06lHnGAkW0icNaHDng5GxgX+d+RduU/qv/ZM1iLxGvBStN0sm/WW87DOym\n/18qttc7L4oL7QT1DNFarRHKqs6P4E+ljKToLaJONQB+wlYL2H9Qr4alVNIBie2g\nIutrof3wgQKBgDHEfUdaCDyZETdCK2gBLKsG45/WfQ8G07htUu2YQ6bAKOebx314\nQ6ktp9EnunUP377F2LDMeLddXnXOq+Wd8B8EHULJoMGgqkKw+JpT5jMzeSUwM6s7\nd3L7R0IaKCWiAsXYxa/EIW0e1iyu00WMhBWoz/5qD6EnVci20gez+tPLAoGBANn/\nYZuvhOa7scH5cXz4OtNPJIng8CLEDVOPzX7kJo8wQN3hYeIQjwMvFiLqq78xijlg\nT6RYTHo+LcTFNmcMulbw92JCVV6lWTR5mMIpn4M8g8JmGdcUtoBi+jPjmVGpr/rG\nFAm3n+9R4WAY8WQEuL6TqSV/MXZ5m0f1UkUIZKwBAoGAWk7GJPgJOvUmoO2NAo2R\nBBao31KE7qRp5p1BJK/iQcogSES7/EtI2UXX0EuRUuu5GYocFK8gp6hlYaoTNlsY\ni5YicWiCghjj8we0GR9GAIjT5lqrDjNPlWPOptHB80UJHohJgIenYZaCf+Dtzr76\n3Wsh6GFVIzteE8UX9+Pm5gs=\n-----END PRIVATE KEY-----\n",
        "client_email": "katanoff-v2-dev@test-1d636.iam.gserviceaccount.com",
        "client_id": "104611634519331608114",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/katanoff-v2-dev%40test-1d636.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    }
        ;
    // if (!raw) throw new Error("Missing GOOGLE_APPLICATION_CREDENTIALS_JSON env");

    // const credentials = JSON.parse(raw);

    const auth = new GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    const client = await auth.getClient();
    const token = await client.getAccessToken();
    return token;
}
