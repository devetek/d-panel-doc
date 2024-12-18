---
sidebar_position: 1
---

# Teknologi

## Arsitektur

dPanel dibangun menggunakan teknologi yang membuat ekosistemnya menjadi fleksibel dan dapat ditingkatkan di kemudian hari. Dibangun di atas 4 stack utama berikut:
- PostgreSQL
- Golang
- React.js
- Ansible

Terdapat 3 komponen utama dalam ekosistem dPanel yang masing-masing memiliki peranan yang akan dijelaskan di bawah ini:
- dPanel Manager
- dPanel Creator
- dPanel Agent

## Komponen

### Manager

Manager adalah dPanel backend yang dibuat dengan bahasa pemrograman Golang dan PostgreSQL sebagai data storage. Komponen ini memiliki 2 fungsi utama yakni sebagai authentication service dan state management. Dimana informasi tentang server hingga aplikasi dikelola oleh dPanel Manager dan dapat diakses secara terbatas oleh user yang diperbolehkan.

### Creator

Creator adalah kumpulan configuration management yang dibangun dengan Ansible sebagai backbone. Dimana creator adalah engine yang bertanggung jawab melakukan komunikasi antara manager dan resource yang digunakan. Sebagai gambaran di bawah ini akan menunjukkan fungsi-fungsi yang terdapat di dalam Creator.

![Creator Diagram](./../assets/creator-diagram.jpg)

### Agent

Agent adalah aplikasi yang berjalan di cloud provider yang bertanggung jawab untuk berkomunikasi dengan manager untuk mengirimkan informasi yang dibutuhkan oleh manager. Ada 3 jenis agent untuk mengelola "managed server / container":
- Single Instance
- Group Instance - *on progress*
- Container Orchestrator - *backlog*

Untuk "non managed server / container (serverless)" agent tidak diperlukan untuk berlajan secara berkelanjutan. Manager hanya berkomunikasi menggunakan "Creator" dan mengelola state yang dikembalikan oleh Cloud Provider.