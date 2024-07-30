import React from 'react';
import styles from './map.module.scss';

export function Map() {
  return (
    <figure className={styles.map}>
      <div className={styles.top} />
      <div className={styles.main}>
        <a
          href="https://yandex.ru/maps/162/almaty/?utm_medium=mapframe&utm_source=maps"
        >
          Алматы
        </a>
        <a
          href="https://yandex.ru/maps/162/almaty/house/Y08YfwVmSkIBQFppfX5wdnpnYw==/?ll=76.971917%2C43.240369&utm_medium=mapframe&utm_source=maps&z=12.08"
        >
          Проспект Аль-Фараби, 71 —
          Яндекс Карты
        </a>
        <div className={styles.overlay} />
        <iframe
          title="map"
          src="https://yandex.ru/map-widget/v1/?ll=76.971917%2C43.240369&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0Njc2OTMyMzAzEkbSmtCw0LfQsNKb0YHRgtCw0L0sINCQ0LvQvNCw0YLRiywg05jQuy3QpNCw0YDQsNCx0Lgg0LTQsNKj0pPRi9C70YssIDcxIgoNTtqZQhXe3ixC&z=12.08"
          frameBorder="1"
        />
      </div>
      <div className={styles.bottom} />
    </figure>
  );
}
