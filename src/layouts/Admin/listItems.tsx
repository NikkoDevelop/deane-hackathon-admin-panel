import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import CategoryIcon from '@material-ui/icons/Category';
import BusinessIcon from '@material-ui/icons/Business';
import ExploreIcon from '@material-ui/icons/Explore';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import PaletteIcon from '@material-ui/icons/Palette';
import { useRouter } from 'next/router';

export const MainListItems: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <ListItem button onClick={() => router.push('/admin/models/Case')}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Кейсы" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Catalog')}>
        <ListItemIcon>
          <BookmarksIcon />
        </ListItemIcon>
        <ListItemText primary="Каталоги" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Category')}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Категории" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Exhibitor')}>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Экспоненты" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Feedback')}>
        <ListItemIcon>
          <ForumIcon />
        </ListItemIcon>
        <ListItemText primary="Отзывы" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Location')}>
        <ListItemIcon>
          <ExploreIcon />
        </ListItemIcon>
        <ListItemText primary="Локации" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Media')}>
        <ListItemIcon>
          <PermMediaIcon />
        </ListItemIcon>
        <ListItemText primary="Медиа" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Partner')}>
        <ListItemIcon>
          <DragHandleIcon />
        </ListItemIcon>
        <ListItemText primary="Партнеры" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/Product')}>
        <ListItemIcon>
          <PaletteIcon />
        </ListItemIcon>
        <ListItemText primary="Продукты" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/User')}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Пользователи" />
      </ListItem>
    </div>
  );
};
