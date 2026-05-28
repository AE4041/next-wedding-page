/*
 *  Copyright (C) 2017 Curare Technology.
 *  All rights to this software are owned by Curare Technology and use in whole or
 *  in part is prohibited unless express written permission has been granted
 *  by Curare Technology.
 */

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const pageNavigator = (router: AppRouterInstance) => {

    const navigateToHomePage = () => {
        router.push("/home");
    };

    return {
        navigateToHomePage
    };
};