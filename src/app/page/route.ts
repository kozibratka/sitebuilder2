import {PageListComponent} from "./pages/page-list/page-list.component";
import {GenericResolver} from "../core/services/resolver/generic.resolver";
import {PageCreateComponent} from "./pages/page-create/page-create.component";
import {PageDetailResolverService} from "./services/page-detail-resolver.service";
import {PageBuilderComponent} from "./pages/page-builder/page-builder.component";
import {PageBuilderResolverService} from "./services/page-builder-resolver.service";

export default   [
  {
    path: 'list',
    component: PageListComponent,
    // resolve: {pageList: PageListResolverService},
    resolve: {pageList: GenericResolver},
    data: {resolverConfig: {data: {route: 'page_list'}, queryDataMap: {webId: 'id'}}},
    // runGuardsAndResolvers: 'always',
  },
  {
    path: 'update/:pageId',
    component: PageCreateComponent,
    resolve: {pageDetail: PageDetailResolverService},
  },
  {
    path: 'create',
    component: PageCreateComponent
  },
  {
    path: 'page-builder/:pageId',
    component: PageBuilderComponent,
    resolve: {pageDetail: PageBuilderResolverService},
    data: {withGlobalPlugins: true},
  }
];
