# ������������� ��������� ����� nginx � ����� �������� ������
FROM nginx

# ��������� �� ������������� �� ����� � ����� /usr/share/nginx/html � �����
RUN rm -rf /usr/share/nginx/html/*

# ������� ����� ������ ������ �� ������ nginx
COPY ./index.html /usr/share/nginx/html

# ³�������� ���� 80, ���� � ����������� ������ ��� ���-������� nginx
EXPOSE 80

# ������� CMD ������� �������, ��� ���� �������� �� ��� ������� ����������
CMD ["nginx", "-g", "daemon off;"]