---
sidebar_position: 0
---

# Tambah Domain

dPanel mendukung fitur pengelolaan domain dari DNS manager terkemuka seperti Cloudflare, AWS Route53, Digital Ocean dan lain-lain untuk mempermudah dalam proses integrasi dengan ekosistem aplikasi. Dengan memindahkan pengelolaan domain ke dPanel, membuat publikasi aplikasi lebih mudah termasuk pembuatan SSL.

Ikuti langkah-langkah berikut untuk memindahkan pengelolaan domain ke dPanel:

## Cloudflare

1. Login ke CloudFlare Dashboard [di sini](https://dash.cloudflare.com/login)

2. Pilih domain di halaman "Website"

![CloudFlare Domains](./../../../assets/cloudflare-select-domain.png)

3. Salin domain Zone ID

![CloudFlare Domain Zone ID](./../../../assets/cloudflare-zone-id.png)

4. Buat CloudFlare Token [di sini](https://dash.cloudflare.com/profile/api-tokens)

![CloudFlare Tokens](./../../../assets/cloudflare-create-token.png)

5. Gunakan Token Template "Edit Zone DNS"

![CloudFlare Token Template](./../../../assets/cloudflare-token-template.png)

6. Pilih detail pengaturan token

![CloudFlare Token Detail](./../../../assets/cloudflare-token-detail.png)

7. Tambah domain [di sini](https://cloud.terpusat.com/domain)

![CloudFlare Token Detail](./../../../assets/cloudflare-add-domain.png)