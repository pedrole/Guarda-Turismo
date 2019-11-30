<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bo_bd');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'usbw');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'eE)5+dKU ,DjVO}i:O!M`%4#U7IHwiO7<:B%d|t+O(B$~ZBHJ7gTz3}:7^-@~})-');
define('SECURE_AUTH_KEY',  '=V<W3pG@3}knr>Kcv>HS&&+?Ks-thuf?_28Oq+sV,,59P:okQSak+./nw}suD;,b');
define('LOGGED_IN_KEY',    'J|iFL2wlO$ww!1CRYj;xW$JANs9maEZw|6GAC{yQ=u[>Ur!1 }_~^-U)Lc7UQFnB');
define('NONCE_KEY',        'g 1Fk`CssmjW8#.o`Rc.VF#Xs9csF&vhhjlj`wI/+]@iaC&MAblI-qJ?JLwyb.5R');
define('AUTH_SALT',        '[)1famr=/.:1lg*kSa37NMq$B 9IgFx;fSO72TUWoJFuA7w-%GU.;-64`!_B^ ye');
define('SECURE_AUTH_SALT', 'eH^)czoS!x.dg~2g>5^<`=X>tU,t! u=?9C~9~Y2?I][E|UBcU64c*V&kK6!|LRr');
define('LOGGED_IN_SALT',   'P5y?cx>9&[ dNYS2)~lPU4wFmA6:,tdfxQf.hgPxY9u3h,71*._2rsrfRB 1d|Mp');
define('NONCE_SALT',       'f3sy_Suxl=QI;]i0d~HHwBT4?4|#4+zb @1h$S~@?|Xx`gC=llN?wPa?OJGe@DJ!');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
